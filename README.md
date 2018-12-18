# electron-share

> 基于 electron-vue 的桌面应用打包应用

## 应用截图

![app.png](https://upload-images.jianshu.io/upload_images/6167081-f3d10f0405ee6c3f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 持续集成

#### travis-ci

[![Build Status](https://travis-ci.org/HuaRongSAO/electron-share.svg?branch=master)](https://travis-ci.org/HuaRongSAO/electron-share)

#### appveyor

[![](https://img.shields.io/badge/style-popout--square-green.svg?logo=appveyor&style=popout-square)](https://ci.appveyor.com/project/HuaRongSAO/electron-share/history)

---

## 实践

### vol.1 最简单的 dome

官方实例： [electron-quick-start](https://github.com/electron/electron-quick-start)

```js
const { app, BrowserWindow } = require("electron");
let mainWindow;

function createWindow() {
  // 创建窗口
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  // 加载窗口html文件
  mainWindow.loadFile("index.html");
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}
app.on("ready", createWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});
```

只需把你的打包后的文件直接替换就行了，例如其他的 Vue,React，angular 打包后的文件，`js mainWindow.loadFile("index.html");`的 index.html 改成你的文件地址。

### vlo.2 [electron-vue 基于 vue 的应用](https://github.com/SimulatedGREG/electron-vue)

> electron-vue 充分利用 vue-cli 作为脚手架工具，加上拥有 vue-loader 的 webpack、electron-packager 或是 electron-builder，以及一些最常用的插件，如 vue-router、vuex 等等。

文档： [官方文档](https://simulatedgreg.gitbooks.io/electron-vue/content/cn/)

使用：

```sh
    # Install vue-cli and scaffold boilerplate
    npm install -g vue-cli
    vue init simulatedgreg/electron-vue my-project

    # Install dependencies and run your app
    cd my-project
    yarn # or npm install
    yarn run dev # or npm run dev
```

### vol.3 [electron-react-boilerplate 基于 react 的应用](https://github.com/electron-react-boilerplate/electron-react-boilerplate)

> A Foundation for Scalable Cross-Platform Apps

文档： [官方文档](https://github.com/electron-react-boilerplate/electron-react-boilerplate)

使用：

```sh
    # git clone
    git clone --depth 1 --single-branch --branch master https://github.com/electron-react-boilerplate/electron-react-boilerplate.git your-project-name

    cd your-project-name
    yarn
    yarn dev

```

### vol.4 配置 github 的 releases 版本发布

- 进入项目仓库的[releases 界面](https://github.com/HuaRongSAO/electron-share/releases)
- 创建草稿版本
- ![p2.png](https://upload-images.jianshu.io/upload_images/6167081-1253a9cb08ee4905.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- ![p3.png](https://upload-images.jianshu.io/upload_images/6167081-01ccfe648f2ce01e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 版本号管理依赖于 package.json

### vol.5 持续集成

> 用于提交代码后自动触发构建钩子，自动打包 mac，linux 和 window 应用程序，并且自动发布到 github 的 release

mac 和 linux 构建：[travis](https://travis-ci.org)  
window 构建：[travis](https://ci.appveyor.com/)

当使用 electron-builder 配置时，项目还提供了用于自动部署的 appveyor.yml 和 .travis.yml。两个配置文件都被设置好了用于构建你的 electron 应用，并将生成的程序推送到 GitHub 的发布页面、Bintray 等。Travis CI 用于构建 linux 和 darwin (macOS)，而 AppVeyor 用于构建 win32。

接下来讲讲具体配置的时候遇到的问题。

- 在 [Travis CI](https://travis-ci.org) 或 [AppVeyor](https://www.appveyor.com/) 上创建一个帐户
- 创建仓库关联
- 访问 https://github.com/settings/tokens 并点击 生成新令牌 (Generate new token)
- 勾选权限 repo 全部
  ![p.png](https://upload-images.jianshu.io/upload_images/6167081-65e7154951aa74fa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 拿到 github 访问 token =》 3274aaedc4ca3614d897988d376da359dab38457
  ,请找个地方先保存下来，后面会用到多次

### travis 配置 ( 构建 linux 和 mac 系统应用)

方案一：

- 登入 [travis](https://travis-ci.org) 在项目的设置里面配置 GH_TOKEN, GH_TOKEN 就是你上面的 token
- ![p.png](https://upload-images.jianshu.io/upload_images/6167081-dc7cdc2552cfbd7e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

方案二：

- 安装 travis 加密工具 [travis.rb](https://github.com/travis-ci/travis.rb#readme)
- 加密 token ==> asdasdasdasdasdasdasdsadasdsadas23

```sh
    # 安装 Travis CI 命令行工具
    gem install travis
    # 加密 Personal Access Token
    travis encrypt -r iissnan/theme-next-docs GH_TOKEN=token

```

- 修改项目根目录下的`.travis.yml`
- 添加如下:

```sh
env:
  global:
    - secure: "asdasdasdasdasdasdasdsadasdsadas23"
```

还有一个小点，配置打包的钩子的运行次数和间隔

![DeepinScrot-2912.png](https://upload-images.jianshu.io/upload_images/6167081-18d0a9d2e33f77dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### appveyor 配置( 构建 window 系统应用)

方案一：

- 进入[appveyor](https://ci.appveyor.com/), 打开 setting=》environment=》添加 GH_TOKEN = token

![a1.png](https://upload-images.jianshu.io/upload_images/6167081-c0eea9f917347c09.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

方案二：

- 进入[AppVeyor Token 加密页面](https://ci.appveyor.com/tools/encrypt),加密你的 token
- 配置项目下的配置文件 `appveyor.yml`

```sh
environment:
    access_token:
        secure: # 自己的加密token
```

### vol.6 配置 package.json 发布推送

- 打开 package.json
- 配置 electron-builder，[详情请看](https://www.electron.build/configuration/publish)
- ```sh
    "postinstall": "electron-builder install-app-deps",
    "publish": "electron-builder --publish onTagOrDraft"
  ```
- 参数"--publish onTagOrDraft",onTagOrDraft：存在草稿或者 tag 替换，可选 onTag，onTagOrDraft，always，never
- 然后配置 `.travis.yml`和`appveyor.yml`的 build 脚本，

`.travis.yml`

```sh
    script:
    - yarn run build
    - npm run publish
```

`appveyor.yml`

```sh
    build_script:
    - yarn build
    - npm run publish
```

保存推送。

### vol.7 后续发布

- 修改文件系统
- 创建 github 的 releases 草稿
- 修稿 package.json 的 version
- 提交

完成。   
浅尝辄止。    
世界那么大，我想学AI
