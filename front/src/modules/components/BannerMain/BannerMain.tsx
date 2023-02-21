import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Text } from "../Text";
import wish_list_pen from "../images/wish_list_pen.jpg";
import brown_lady from "../images/brown_lady.jpg";
import "./BannerMain.scss";

export function BannerMain() {
  const navigate = useNavigate();
  const navigateCreate = () => {
    setTimeout(() => navigate("/create", { replace: true }), 500);
  };

  return (
    <Box>
      <div className="main_cont-sides">
        <div>
          <div>
            <Text tag="h1">Расскажите родным и друзьям, о чём мечтаете!</Text>
          </div>
          <Button className="create_wish" onClick={navigateCreate}>
            Создать список
          </Button>
        </div>
        <div>
          <img src={brown_lady} alt="Brown Lady" />
        </div>
      </div>
      <div className="main_cont-sides">
        <div>
          <img src={wish_list_pen} alt="Wishlist" />
        </div>
        <div className="main_cont-sides-pad">
          <Text tag="h2">Как это работает?</Text>
          <Text tag="p">
            Залогиньтесь получателем и пригласите знакомых залогиниться
            дарителями. Они увидят список ваших желаний и смогут договориться,
            кто что будет дарить!
          </Text>
          <Button className="learn_more" href={"/more"}>
            Подробнее
          </Button>
        </div>
      </div>
    </Box>
  );
}
