import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { FormProvider, useForm } from 'react-hook-form';
import { styled } from 'twin.macro';

import {
  // useAuthTotpVerifyMutation,
  useAuthLogoutMutation,
  useAuthTotpQRMutation,
} from '@/apis/auth';
import {
  useUserChangePasswordMutation,
  useUserDeleteMutation,
  useUserInfoQuery,
} from '@/apis/user';

import { useAuthStore } from '@/store/authStore';

import InputForm from '../../form/InputForm';
import Button from '../../ui/button/Button';

export default function Mypage() {
  const router = useRouter();
  const { data, isLoading } = useUserInfoQuery();
  const userChangePasswordMutation = useUserChangePasswordMutation();
  const userDelteMutation = useUserDeleteMutation();
  const userTotpQRMutation = useAuthTotpQRMutation();
  // const userTotpVerifyMutation = useAuthTotpVerifyMutation();
  const userLogoutMutation = useAuthLogoutMutation();

  const [cookies, , removeCookie] = useCookies();
  const { clear } = useAuthStore();

  const [willPwChange, setWillPwChange] = useState<boolean>(false);
  const [totpImage, setTotpImage] = useState<string | undefined>(undefined);

  const methods = useForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const handlePwChange = (e: any, set: boolean) => {
    e.preventDefault();
    setWillPwChange(set);
  };

  const handleWithdrawal = (e: any) => {
    e.preventDefault();
    const confirm = window.confirm('정말 탈퇴하시겠습니까?');
    confirm &&
      userDelteMutation.mutate(undefined, {
        onSuccess: () => {
          window.alert('회원탈퇴가 완료되었습니다.');
          clear();
          removeCookie('accessToken');
          removeCookie('refreshToken');
          router.replace('/');
        },
        onError: () => {
          window.alert('회원탈퇴에 실패했습니다.');
        },
      });
  };

  const handleTotp = (e: any, set: boolean) => {
    e.preventDefault();
    if (set) {
      userTotpQRMutation.mutate(
        { email: data?.email as string },
        {
          onSuccess: (data) => {
            setTotpImage(data);
          },
        },
      );
    } else {
      console.log('totp 해제');
    }
  };

  const handleLogout = (e: any) => {
    e.preventDefault();
    const confirm = window.confirm('로그아웃 하시겠습니까?');
    confirm &&
      userLogoutMutation.mutate(
        { refreshToken: cookies.refreshToken },
        {
          onSuccess: () => {
            clear();
            removeCookie('accessToken');
            removeCookie('refreshToken');
            router.replace('/');
          },
          onError: () => {
            window.alert('로그아웃에 실패했습니다.');
          },
        },
      );
  };

  const onSubmit = (data: any) => {
    const { old_password, new_password } = data;
    userChangePasswordMutation.mutate(
      {
        oldPassword: old_password,
        newPassword: new_password,
      },
      {
        onSuccess: () => {
          window.alert('비밀번호가 변경되었습니다.');
          setWillPwChange(false);
        },
        onError: () => {
          window.alert('비밀번호 변경에 실패했습니다.');
        },
      },
    );
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [willPwChange]);

  if (isLoading) {
    return;
  }

  return (
    <>
      <Header>프로필 관리</Header>
      <MypageContainer>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Wrapper>
              <Top>
                <Row>
                  <Title>닉네임</Title>
                  <Content>{data?.name}</Content>
                </Row>
                <Row>
                  <Title>이메일</Title>
                  <Content>{data?.email}</Content>
                </Row>
                <Row>
                  <Title>포인트</Title>
                  <Content tw="text-[#ffd014]">{data?.point}</Content>
                </Row>
                <Row>
                  <Title>비밀번호</Title>
                  {willPwChange ? (
                    <ButtonContainer>
                      <Button
                        variant="secondary"
                        type="submit"
                        tw="w-fit h-[25px] px-[10px] text-[13px] flex items-center justify-center"
                      >
                        저장하기
                      </Button>
                      <Button
                        variant="secondary"
                        type="button"
                        tw="w-fit h-[25px] px-[10px] text-[13px] flex items-center justify-center"
                        onClick={(e) => handlePwChange(e, false)}
                      >
                        취소
                      </Button>
                    </ButtonContainer>
                  ) : (
                    <Content>
                      <Button
                        variant="secondary"
                        type="button"
                        tw="w-fit h-[25px] px-[10px] text-[13px] flex items-center justify-center"
                        onClick={(e) => handlePwChange(e, true)}
                      >
                        변경하기
                      </Button>
                    </Content>
                  )}
                </Row>
                {willPwChange && (
                  <InputContainer>
                    <InputForm
                      {...register('old_password', {
                        required: '비밀번호를 확인해 주세요',
                      })}
                      type="password"
                      placeholder="이전 비밀번호"
                      errors={errors}
                    />
                    <InputForm
                      {...register('new_password', {
                        required: '비밀번호를 확인해 주세요',
                      })}
                      type="password"
                      placeholder="새 비밀번호"
                      errors={errors}
                    />
                  </InputContainer>
                )}
                <Row>
                  <Title>2차 인증 활성화</Title>
                  <Content>
                    {data?.isTotpEnabled ? (
                      <Button
                        variant="tertiary"
                        type="button"
                        tw="w-fit h-[25px] px-[10px] text-[13px] flex items-center justify-center"
                      >
                        비활성화하기
                      </Button>
                    ) : (
                      <Button
                        variant="secondary"
                        type="button"
                        tw="w-fit h-[25px] px-[10px] text-[13px] flex items-center justify-center"
                        onClick={(e) => handleTotp(e, true)}
                      >
                        활성화하기
                      </Button>
                    )}
                  </Content>
                </Row>
                {totpImage && (
                  <Row tw="flex flex-col items-center justify-center gap-0">
                    <div tw="max-w-[250px]">
                      사용하시는 2차 인증 어플리케이션으로 아래 QR코드를
                      스캔해주세요
                    </div>
                    <Image
                      src={totpImage}
                      alt="totp"
                      width={200}
                      height={200}
                    />
                  </Row>
                )}
              </Top>
              <Bottom>
                <Button onClick={handleLogout} tw="font-bold">
                  로그아웃
                </Button>
                <div
                  onClick={handleWithdrawal}
                  tw="text-[13px] text-end p-[5px] mt-[5px] opacity-70 cursor-pointer"
                >
                  회원 탈퇴
                </div>
              </Bottom>
            </Wrapper>
          </form>
        </FormProvider>
      </MypageContainer>
    </>
  );
}

const Header = styled.h1`
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.5px;
  line-height: 1.2;
  padding: 40px 0 20px;
  padding-bottom: 40px;
  font-size: 34px;
`;

const MypageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 32px;
  background: white;
`;

const Top = styled.div`
  border-bottom: 1px solid #f6f6f6;
`;

const Bottom = styled.div`
  padding: 20px 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  gap: 100px;
  font-size: 14px;
`;

const Title = styled.div`
  font-weight: bold;
  color: #656565;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
