import Button from "./components/button";

const Hero = () => {
  return (
    <main>
      <section>
        <h2>Welcome to Our Website</h2>
        <p>Welcome to our website! We're glad you're here.</p>
        <p>
          Feel free to explore our site and learn more about what we have to
          offer.
        </p>
        <Button label="Get started" icon="😎" />
      </section>
      <section>
        <h2>About Us</h2>
        <p>
          We are a team of passionate individuals dedicated to providing the
          best services and products to our customers. Our mission is to make a
          positive impact in the world through our work.
        </p>
        <p>
          Our team is made up of experts in various fields, and we work together
          to achieve our goals.
        </p>
        <Button label={"Enter Now"} icon="😉" type="null" />
      </section>
    </main>
  );
};

export default Hero;
