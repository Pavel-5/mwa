import { Box } from "@mui/material";
import { Text } from "../Text";
import { OccasionsList } from "../OccasionsList";
import "./Occasions.scss";

export function Occasions() {
  return (
    <Box className="main_cont-occasions">
      <Text className="occasions-center" tag={"h2"}>
        Подарки на все случаи
      </Text>
      <Text className="occasions-center" tag={"p"}>
        Попробуйте приложение и найдите подарки на все случаи жизни!
      </Text>
      <OccasionsList />
    </Box>
  );
}
