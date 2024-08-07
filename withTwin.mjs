import babelPluginTypescript from '@babel/plugin-syntax-typescript';
import babelPluginMacros from 'babel-plugin-macros';
import babelPluginTwin from 'babel-plugin-twin';
import * as path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// The folders containing files importing twin.macro
const includedDirs = [path.resolve(__dirname, 'src')];

/** @returns {import('next').NextConfig} */
export default function withTwin(
  /** @type {import('next').NextConfig} */
  nextConfig,
) {
  return {
    ...nextConfig,
    webpack(
      /** @type {import('webpack').Configuration} */
      config,
      options,
    ) {
      const { dev, isServer } = options;

      config.module = config.module || {};
      config.module.rules = config.module.rules || [];

      config.module.rules.push({
        test: /\.(tsx|ts)$/,
        include: includedDirs,
        use: [
          options.defaultLoaders.babel,
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: dev,
              presets: [
                [
                  '@babel/preset-react',
                  { runtime: 'automatic', importSource: '@emotion/react' },
                ],
                '@babel/preset-typescript',
              ],
              plugins: [
                babelPluginTwin,
                babelPluginMacros,
                [babelPluginTypescript, { isTSX: true }],
                [
                  '@emotion/babel-plugin',
                  {
                    sourceMap: true,
                    autoLabel: 'dev-only',
                    labelFormat: '[local]',
                    cssPropOptimization: true,
                  },
                ],
              ],
            },
          },
        ],
      });

      if (!isServer) {
        config.resolve.fallback = {
          ...(config.resolve.fallback || {}),
          fs: false,
          module: false,
          path: false,
          os: false,
          crypto: false,
        };
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
}
