# ecommerce-React-LocalStorage

# Ecommerce utilizando React e funcionalidades manipulando LocalStorage
<p align="center">
  <img src="imgs/gif.gif" >
</p>

## Descrição

Aplicação utiliza API do Mercado Livre para pesquisar produtos, por padrão busca o termo "Manga Berserk" no index, porém é possivel pesquisar qualquer termo que retornará itens a venda do mercado livre, utilizei hooks useState e useEffect do React e BrowserRouter, Routes, Route, Link, para navegar entre as páginas, useNavigate e useLocation para enviar parâmetros entre os componentes, funcionalidades do React-Router-Dom. Com o LocalStorage simulei o back-end, guardando dados do usuário e autenticando comparando com os dados guardados no mesmo, o carrinho de compras também é armazenado no LocalStorage e é possível finalizar a compra caso o perfil logado possua saldo suficiente, dados do usuário também podem ser atualizados no LocalStorage.

- Dialog do @material-ui para o card onde edita e exlui as postagens.
- Yup para validar título e conteúdo, tornei os dois campos obrigatórios e estipulei tamanho minimo e máximo.

### Imagens

<img src="imgs/home.PNG" >
<img src="imgs/cart.PNG" >


## Instalação

### Client

  1. `$ cd client`
  2. `$ npm install` or `$ yarn install`
  3. `$ npm start` or `$ yarn start`

## Funcionalidades

+ Pesquisar produtos, adicionar, remover do carrinho.
+ Login e editar perfil.
+ Concluir compra.

### Front-end
+ `React-Js`
+ `Styled-components`
+ `LocalStorage` 
 


### Simulação Back-end

+ `LocalStorage`

/////////////////////////////////////////////////////////////////////////////
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
