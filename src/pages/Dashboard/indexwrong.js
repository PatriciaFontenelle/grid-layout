import { useEffect } from "react";
import { Card, Container } from "reactstrap";
import SmallCard from "../../components/SmallCard";
// import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Responsive, WidthProvider } from "react-grid-layout";
import "./index.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const items = [
  {
    title: "Teste 1",
    bodyText: "Esse é o teste 1",
    x: 0,
    y: 0,
  },
  {
    title: "Teste 2",
    bodyText: "Esse é o teste 2",
    x: 4,
    y: 0,
  },
  {
    title: "Teste 3",
    bodyText: "Esse é o teste 3",
    x: 8,
    y: 0,
  },
  {
    title: "Teste 4",
    bodyText: "Esse é o teste 4",
    x: 0,
    y: 1,
  },
  {
    title: "Teste 5",
    bodyText: "Esse é o teste 5",
    x: 4,
    y: 1,
  },
  {
    title: "Teste 6",
    bodyText: "Esse é o teste 6",
    x: 8,
    y: 1,
  },
  {
    title: "Teste 7",
    bodyText: "Esse é o teste 7",
    x: 0,
    y: 2,
  },
  {
    title: "Teste 8",
    bodyText: "Esse é o teste 8",
    x: 4,
    y: 2,
  },
];

const Dashboard = () => {
  const layouts = {
    lg: items.map((i) => {
      return {
        i: i.title,
        x: i.x,
        y: i.y,
        w: 4,
        h: 1,
      };
    }),
  };

  useEffect(() => {
    console.log(layouts)
  }, [])
  return (
    <Container className="main-container">
      <ResponsiveGridLayout isResizable={false} rowHeight="auto" layouts={layouts} margin={[10, 10]}>
        {items.map((item) => {
          return (
            <div key={item.title}>
              <SmallCard title={item.title} bodyText={item.bodyText} />
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </Container>
  );
};

export default Dashboard;
