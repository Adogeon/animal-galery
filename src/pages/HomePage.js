import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header title={"Overview"}></Header>
      <main id="overview-main">
        <div id="intro-para">
          A small galery demonstrate the diverse fauna of Earth.
        </div>
        <div id="link-list">
          <ul className="link-marquee">
            <li>
              <Link>
                Okapi
                <img
                  src={
                    "https://www.rainforest-alliance.org/sites/default/files/styles/750w_585h/public/2017-08/okapi-fullsize.jpg?itok=jMogcQi5"
                  }
                  alt="okapi-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Tapir
                <img
                  src={
                    "https://www.edgeofexistence.org/wp-content/uploads/2017/06/Tapirus-indicus_shutterstock_411690637-1000x667.jpg"
                  }
                  alt="tapir-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Leopard
                <img
                  src={
                    "https://storage.needpix.com/rsynced_images/leopard-1954053_1280.jpg"
                  }
                  alt="leopard-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Spider Monkey
                <img
                  src={
                    "https://audubonnatureinstitute.org/images/600x450/zoo/spider-monkey-600.jpg"
                  }
                  alt="spider-monkey-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Three-toed Sloth
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/1/18/Bradypus.jpg"
                  }
                  alt="3-toed-sloth-sm"
                ></img>
              </Link>
            </li>
          </ul>
          <ul className="link-marquee">
            <li>
              <Link>
                Whale Shark
                <img
                  src={
                    "https://i.insider.com/5d1a31f02516e92a1014446b?width=779&format=jpeg"
                  }
                  alt="whale-shark-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Spider Crab
                <img
                  src={
                    "https://www.georgiaaquarium.org/wp-content/uploads/2018/08/animal-crab.jpg"
                  }
                  alt="spider-crabs-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Green Turtle
                <img
                  src={
                    "https://images.squarespace-cdn.com/content/v1/5369465be4b0507a1fd05af0/1401857267589-LTDZ4ZWKAAJ37CU72LVV/ke17ZwdGBToddI8pDm48kOumf8f7DXE9eI5ekjV0fflZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIv2KlheSKzUo4EcAbd3aEJYc4O5nXPV5t7VXyeYX4xe8KMshLAGzx4R3EDFOm1kBS/picture-19.jpg?format=1500w"
                  }
                  alt="green-turtles-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Cape Fur Seal
                <img
                  src={
                    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/cape-fur-seal-david-hosking.jpg"
                  }
                  alt="fur-seal-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Oceanic Whitetip Shark
                <img
                  src={
                    "https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2017/05/Carcharhinus-longimanus-10.jpg"
                  }
                  alt="whitetip-shark-sm"
                ></img>
              </Link>
            </li>
          </ul>
          <ul className="link-marquee">
            <li>
              <Link>
                Mongolian Gazelle
                <img
                  src={
                    "https://i.pinimg.com/736x/d9/e5/d1/d9e5d103545df855877cc02d6353b7d1.jpg"
                  }
                  alt="mongolian-gazelle-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Antelope Saiga
                <img
                  src={
                    "https://i.pinimg.com/originals/65/d2/28/65d228469895ad03e1a733e418a8285a.jpg"
                  }
                  alt="saiga-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Coyote
                <img
                  src={
                    "https://i2.wp.com/oshawaexpress.ca/wp/wp-content/uploads/2019/06/coyote.jpg?resize=1000%2C954"
                  }
                  alt="coyote-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Yak
                <img
                  src={
                    "https://cdn.britannica.com/40/188540-050-9AC748DE/Yak-Himalayas-Nepal.jpg"
                  }
                  alt="yak-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Caribou
                <img
                  src={
                    "https://thumbs-prod.si-cdn.com/wAZ3grZ9kl_cdpKbu5HQ3Lboeh0=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/c8/66/c8669825-2fef-43a9-bf76-6ed0064162de/istock-846982062.jpg"
                  }
                  alt="caribou-sm"
                ></img>
              </Link>
            </li>
          </ul>
          <ul className="link-marquee">
            <li>
              <Link>
                Bactrian Camel
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/8/82/2011_Trampeltier_1528.JPG"
                  }
                  alt="bactrian-camel-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Red Kangaroo
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Red_kangaroo_-_melbourne_zoo.jpg/1200px-Red_kangaroo_-_melbourne_zoo.jpg"
                  }
                  alt="red-kangaroo-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Fennec Fox
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/9/9c/Fennec_Fox.jpg"
                  }
                  alt="fennec-fox-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Nubian Ibex
                <img
                  src={
                    "https://animals.sandiegozoo.org/sites/default/files/inline-images/nubian_ibex_male.jpg"
                  }
                  alt="nubian-ibex-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Horned Viper
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/c/c9/Hornviper_Cerastes_cerastes.jpg"
                  }
                  alt="horned-viper-sm"
                ></img>
              </Link>
            </li>
          </ul>
          <ul className="link-marquee">
            <li>
              <Link>
                Demoiselle Crane
                <img
                  src={
                    "https://download.ams.birds.cornell.edu/api/v1/asset/140483601/1800"
                  }
                  alt="dem-crane-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Snow Leopard
                <img
                  src={"https://scx2.b-cdn.net/gfx/news/2017/snowleopard.jpg"}
                  alt="snow-leo-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Gelada
                <img
                  src={
                    "https://animals.sandiegozoo.org/sites/default/files/2018-08/Gelada_ZN.jpg"
                  }
                  alt="gelada-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Golden Eagle
                <img
                  src={
                    "https://www.audubon.org/sites/default/files/styles/hero_image/public/golden-eagle-1-c-stewart-finlayson.jpg?itok=t-5GUGpf"
                  }
                  alt="gold-eagle-sm"
                ></img>
              </Link>
            </li>
            <li>
              <Link>
                Markhor
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg"
                  }
                  alt="markhor-sm"
                ></img>
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <NavBar />
    </>
  );
};

export default HomePage;
