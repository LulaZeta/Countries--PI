import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<CreatActivity />", () => {
  describe("Estructura", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CreatActivity />);
    });
    it("Renderiza un <form>", () => {
      expect(wrapper.find("form")).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "NOMBRE"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(0).text()).toEqual("NOMBRE");
    });

    it('Renderiza un input con la propiedad "name" igual a "name"', () => {
      expect(wrapper.find('input[name="name"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "DIFICULTAD"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(1).text()).toEqual("DIFICULTAD");
    });

    // it('Renderiza una textarea con la propiedad "name" igual a "description"', () => {
    //   expect(wrapper.find('textarea[name="description"]')).toHaveLength(1);
    // });

    it('Renderiza un label con el texto igual a "TEMPORADA: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(2).text()).toEqual("TEMPORADA: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "season"', () => {
      expect(wrapper.find('input[name="Season"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "DURACIÓN"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("DURACIÓN");
    });

    it('Renderiza un input con la propiedad "name" igual a "Duration"', () => {
      expect(wrapper.find('input[name="Duration"]')).toHaveLength(1);
    });

    it('Renderiza un boton con el "type" "submit"', () => {
      expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
    });
  });
});
