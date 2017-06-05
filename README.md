# cart

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```

### 本案例根据vuex购物车模块加以学习和修改

#### 1. 登录模块
```
模拟登录信息存储在localStorage:
let user = {};
let token = null
```
```
modules/login.js 登录模块局部状态存储
含有对应分发 Action 和 提交 Mutations

```

#### 2. 购物车模块

```
modules/cart.js 购物车模块局部状态存储
含有对应分发 Action 和 提交 Mutations
添加到购物车和删除购物车数据操作
```

#### 3. 商品数据模块

```
modules/production.js 商品数据模块局部状态存储
含有对应分发 Action 和 提交 Mutations
获取商品，商品数量加减操作
```

#### 4. api模块
```
index.js 使用vue-resource封装request请求模块
shop.js 定义商品数据信息供使用
```

#### 5. 数据校验模块
```
使用 vee-validate 进行数据校验，里面涉及初步基本使用，
对应其他规则请移步[github](https://github.com/logaretm/vee-validate)
```

