import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 5000
  },
  
  use: {
    actionTimeout: 0,
     trace: 'on-first-retry',
     launchOptions:{
      args:['--allow-running-insecure-content']
     },
     screenshot:"off",
     video:"off",
  },
  retries:2,

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },


  ],

});
