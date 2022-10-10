import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.nio.file.WatchEvent;

public class Selenium {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("http://www.saucedemo.com");

        WebElement campoUser = driver.findElement(By.id("user-name"));
        campoUser.sendKeys("standard_user");

        WebElement campoSenha = driver.findElement(By.id("password"));
        campoSenha.sendKeys("secret_sauce");

        WebElement botaoLogin = driver.findElement(By.id("login-button"));
        botaoLogin.click();

        WebElement adicionarBolsa = driver.findElement(By.id("add-to-cart-sauce-labs-backpack"));
        adicionarBolsa.click();
        WebElement adicionarLight = driver.findElement(By.id("add-to-cart-sauce-labs-bike-light"));

        WebElement filter = driver.findElement(By.className("product_sort_container"));
        Select selectObject = new Select(filter);
        selectObject.selectByIndex(1);

        WebElement cart = driver.findElement(By.className("shopping_cart_link"));
        cart.click();

        WebElement checkout = driver.findElement(By.className("checkout_button"));
        checkout.click();

        WebElement nav = driver.findElement(By.id("react-burger-menu-btn"));
        nav.click();

        WebElement logoutBtn = driver.findElement(By.className("logout_sidebar_link"));
        logoutBtn.;
    }
}
