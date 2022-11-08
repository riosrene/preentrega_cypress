/// <reference types="cypress" />

import { LoginPage } from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingCartPage } from "../support/pages/shoppingcartPage";


describe('POM Test', () =>{
    let datosLogin;
    let datosProduc;   
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const shoppingcartPage = new ShoppingCartPage();
        

    before("Agregar los fixture", () =>{
        cy.fixture('loginData').then(data => {
            datosLogin = data;
        })

        cy.fixture('productsdata').then(datap => {
            datosProduc = datap;
        })
    })

    beforeEach(" inicio", () => {
        cy.visit('https://pushing-front.vercel.app/')
        cy.get("#registertoggle").dblclick();
        loginPage.enterUser(datosLogin.username);
        loginPage.enterPassword(datosLogin.password);
        loginPage.clickBotonLogin();       
    });

    it('Ingresar a Online Shop', () => {
        homePage.clickOnlineShLink();
        productsPage.clickAddtoCart1();
        productsPage.clickMessageAlert();
        productsPage.clickAddtoCart2();
        productsPage.clickMessageAlert();
        productsPage.clickShoppingCart();
        shoppingcartPage.nameProduct1(datosProduc.products1.item1);
        shoppingcartPage.priceProduct1(datosProduc.products1.price1);
        shoppingcartPage.nameProduct2(datosProduc.products2.item2);
        shoppingcartPage.priceProduct2(datosProduc.products2.price2);
        shoppingcartPage.btnShowTotalPrice();

        let totalprice = shoppingcartPage.priceProduct1 + shoppingcartPage.priceProduct2;
        let totalJsonPrice = datosProduc.products1.price1 + datosProduc.products2.price2;
        cy.log('La compra fue de:', totalprice);
        cy.log('total es:', totalJsonPrice);
        
               
    }); 

   


})

