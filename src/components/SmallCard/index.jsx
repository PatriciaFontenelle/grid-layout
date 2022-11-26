import { Card, Button } from "reactstrap";
import "./index.css";

const SmallCard = ({ title, bodyText }) => {
  return (
    <Card className="small-card">
      <div className="card-title">{title}</div>
      <div className="card-body">{bodyText}</div>
      <Button>Go somewhere</Button>
    </Card>
  );
};

export default SmallCard;
