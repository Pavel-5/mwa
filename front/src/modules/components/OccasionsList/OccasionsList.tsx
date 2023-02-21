import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Text } from "../Text";
import happy_brthd from "../images/happy_brthd.jpg";
import annyversary from "../images/annyversary.jpg";
import valentines from "../images/valentines.jpg";
import christmas from "../images/christmas.jpg";

export function OccasionsList() {
  let items = [
    {
      name: "Ко Дню рожденья",
      link: "/brthd",
      img: happy_brthd,
    },
    {
      name: "К юбилею",
      link: "/annyversary",
      img: annyversary,
    },
    {
      name: "Ко Дню святого Валентина",
      link: "/valentines",
      img: valentines,
    },
    {
      name: "На Рождество",
      link: "/christmas",
      img: christmas,
    },
  ];

  return (
    <Box className="occasions-cont">
      {items.map((item) => (
        <div className="occasions-cont-item">
          <img src={item.img} alt={item.name} />
          <Text tag="p">{item.name}</Text>
          <Link className="occasions-cont-more" to={item.link} title="">
            Подробнее
          </Link>
        </div>
      ))}
    </Box>
  );
}
