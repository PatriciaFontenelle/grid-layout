import { useEffect } from "react";
import { Card, Container } from "reactstrap";
import SmallCard from "../../components/SmallCard";
// import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./index.css";

const items = [
  {
    title: "Teste 1",
    bodyText: "Esse é o teste 1",
  },
  {
    title: "Teste 2",
    bodyText: "Esse é o teste 2",
  },
  {
    title: "Teste 3",
    bodyText: "Esse é o teste 3",
  },
  {
    title: "Teste 4",
    bodyText: "Esse é o teste 4",
  },
  {
    title: "Teste 5",
    bodyText: "Esse é o teste 5",
  },
  {
    title: "Teste 6",
    bodyText: "Esse é o teste 6",
  },
  {
    title: "Teste 7",
    bodyText: "Esse é o teste 7",
  },
  {
    title: "Teste 8",
    bodyText: "Esse é o teste 8",
  },
];

const Dashboard = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".draggable");
    const rows = document.querySelectorAll(".row");

    console.log('rows')
    console.log(rows)

    elements.forEach((el) => {
      el.addEventListener("dragstart", () => {
        el.classList.add("dragging");
      });
      el.addEventListener("dragend", () => {
        el.classList.remove("dragging");
      });
    });

    rows.forEach((row) => {
      const rowElements = row.querySelectorAll('.draggable');
      rowElements.forEach((el) => {
        el.addEventListener('dragover', (e) => {
          const draggingEl = document.querySelector(".dragging");
          const x = e.clientX;
          const box = el.getBoundingClientRect();

          const middleX = (box.left + box.right) / 2;

          if(x >= middleX) {
            row.insertBefore(el, draggingEl)
          } else {
            row.insertBefore(draggingEl, el)
          }
        })
      })
      row.addEventListener("dragover", (e) => {
        const draggingEl = document.querySelector(".dragging");
        row.appendChild(draggingEl);
      });
    });
  }, []);

  return (
    <Container className="main-container">
      <div className="cards-wrapper">
        <div className="row">
          <div className="draggable" draggable={true}>
            <SmallCard title={items[0].title} bodyText={items[0].bodyText} />
          </div>
          <div className="draggable" draggable={true}>
            <SmallCard title={items[1].title} bodyText={items[1].bodyText} />
          </div>
          <div className="draggable" draggable={true}>
            <SmallCard title={items[2].title} bodyText={items[2].bodyText} />
          </div>
        </div>
        <div className="row">
          <div className="draggable" draggable={true}>
            <SmallCard title={items[3].title} bodyText={items[3].bodyText} />
          </div>
          <div className="draggable" draggable={true}>
            <SmallCard title={items[4].title} bodyText={items[4].bodyText} />
          </div>
          <div className="draggable" draggable={true}>
            <SmallCard title={items[5].title} bodyText={items[5].bodyText} />
          </div>
        </div>
        <div className="row">
          <div className="draggable" draggable={true}>
            <SmallCard title={items[6].title} bodyText={items[6].bodyText} />
          </div>
          <div className="draggable" draggable={true}>
            <SmallCard title={items[7].title} bodyText={items[7].bodyText} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
