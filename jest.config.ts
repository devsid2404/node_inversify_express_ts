import type {Config} from '@jest/types';
const config: Config.InitialOptions ={
    transform: {
      '^.+\\.(j|t)sx?$': 'ts-jest',
      '^.+\\.(j|t)s?$': 'ts-jest',
    },
    testMatch: ['<rootDir>/unitTests/**/?(*.)(spec|test).(ts|js)?(x)'],
    moduleFileExtensions: [
      'ts',
      'tsx',
      'js',
      'jsx',
      'json',
      'node',
    ],
    coverageThreshold: {
      global: {
        branches: 60.00,
        functions: 60.00,
        lines: 60.00,
        statements: 60.00,
      },
    },
  };

  export default config;
  