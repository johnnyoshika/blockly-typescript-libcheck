# blockly-typescript-libcheck

Demonstration of blockly@8.0.1 with TypeScript. It doesn't compile unless `"skipLibCheck": true` is added to `tsconfig.json`.

## Setup

```
git clone https://github.com/johnnyoshika/blockly-typescript-libcheck.git
cd blockly-typescript-libcheck
npm ci
```

## Compile

This will compile fine:

```
npm run build
```

Now delete `"skipLibCheck": true` from [tsconfig.json](https://github.com/johnnyoshika/blockly-typescript-libcheck/blob/main/tsconfig.json) and run:

```
npm run build
```

Without `"skipLibCheck": true`, compiling will result in:

![image](https://user-images.githubusercontent.com/504505/167077767-4d7d6243-4fab-487a-8010-64da801d14b6.png)
