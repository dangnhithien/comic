import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
const item = {
  name: "Thiên Đạo Đồ Thư Quán",
  chapters: [
    { number: 0, date: "Jan 9, 2014" },
    { number: 1, date: "Jan 9, 2014" },
    { number: 2, date: "Jan 9, 2014" },
  ],
};
export default function ProductItem() {
  const { name, chapters } = item;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="http://st.ntcdntempv3.com/data/comics/211/tho-san-thien-tai-hoi-quy-thanh-lao-cong-3395.jpg"
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <List>
          {chapters.map((element, key) => {
            return (
              <ListItem disablePadding disableGutters key={key}>
                <ListItemText primary={"Chapter " + element.number} />
                <ListItemText secondary={element.date} />
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
}
