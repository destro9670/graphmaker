import React from "react";

import cover from "../../assets/cover.png";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src={cover} alt={cover} />
      <h2>Петрицька Валентина Степанівна</h2>
      <div className="sidebar-data">
        <ul>
          <li>
            <span className="data-heading">Дата народження: </span>
            <span className="data-info">16.07.1987</span>{" "}
          </li>
          <li>
            <span className="data-heading">Рнокпп:</span>{" "}
            <span className="data-info">1234567890</span>
          </li>
          <li>
            <span className="data-heading">Паспорт:</span>{" "}
            <span className="data-info">ВН 123456</span>
          </li>
          <li>
            <span className="data-heading">Телефон:</span>{" "}
            <span className="data-info">380972756292</span>
          </li>
          <li>
            <span className="data-heading">Також відомий як:</span>{" "}
            <span className="data-info">Петрицкaя Валентина Степановна</span>{" "}
          </li>
          <li>
            <span className="data-heading">Пошта:</span>{" "}
            <span className="data-info">misteraboba87@gmail.com</span>{" "}
          </li>
          <li>
            <span className="data-heading">Адреса:</span>
            <span className="data-info">
              12443, Житомирська, Житомирський, Озерне, вул. Авіаційна, 60,
              кв.64, Прописка - 12443, Житомирська, Житомирський, Озерне, вул.
              Авіаційна, 60, кв64 ВУЛ.МЕТАЛІСТІВ, 7, М.КИЇВ
            </span>{" "}
          </li>
        </ul>
        <button className="button">Шукати</button>
      </div>
    </div>
  );
}
