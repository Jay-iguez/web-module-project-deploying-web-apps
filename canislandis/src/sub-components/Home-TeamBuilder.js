import React from "react";
import { Container, TextBox, ProfileImage } from "../styled-components/TeamBuilder-styled";
import SillyBleu from '../data/images/bleu.png'

export default function HomeTeamBuilder () {

    return (
        <>
        <Container>
        <TextBox>
            <h2>About Us:</h2>
            <p>Greetings, coffee aficionado and fellow paw-some adventurer! 🐶☕️</p>
            <p>Step into the heart of The Woofing Bean, a coffee haven like no other, where every cup is filled with tail-wagging joy! Owned by Bleu, our spirited Queensland Heeler/Husky mutt, The Woofing Bean is more than just a coffee shop—it's a celebration of canine charm and coffee artistry.</p>
            <p><strong>Our Mission:</strong></p>
            <ul>
                <li><strong>Canine Charm:</strong> Immerse yourself in the delightful atmosphere crafted by our four-legged friends, led by the charismatic Bleu. Their infectious energy makes every visit a wag-tastic experience.</li>
                <li><strong>Bark-tastic Brews:</strong> Indulge in our paw-some selection of coffee brews, each crafted with love and expertise. From the classic bark-roast to specialty blends, we have a cup to suit every taste.</li>
                <li><strong>Pup-sational Treats:</strong> Pair your coffee with our pup-sational treats, handcrafted to perfection. It's not just a snack; it's a delicious journey for your taste buds.</li>
                <li><strong>Our Digital Den:</strong> Explore our virtual doghouse, where you can learn more about our team, our coffee offerings, and the charming stories behind each cup. No need to leave your cozy spot; everything you need is just a click away.</li>
            </ul>
            <p><strong>Join Our Pack:</strong></p>
            <p>Whether you're a coffee connoisseur or simply seeking a warm and welcoming place to unwind, The Woofing Bean invites you to join our pack. It's more than a coffee shop; it's a community built on the love for good coffee, furry friends, and shared moments of joy.</p>
            <p><strong>Come, sit, and stay for a while. Let's share woofs and wonderful brews at The Woofing Bean!</strong> 🐾</p>
            <p>Tail wags and coffee cheers,<br></br>The Woofing Bean Team 🐾</p>
        </TextBox>
    </Container>
    <Container>
        <TextBox>
            <h2>Hello, My Name is Bleu!</h2>
            <ProfileImage src={SillyBleu}></ProfileImage>
            <p>I'm the Proud Owner of the World Famous (We only have one location but that's besides the point...): The Woofing Bean Coffee Shop! The only Coffee Shop ran only by Dogs! It's a complicated system, but we get things done.</p>
        </TextBox>
    </Container>
        </>
    )
}