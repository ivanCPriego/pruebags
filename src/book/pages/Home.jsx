import React from "react";

import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

export const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      const SERVICE_ID = "service_hkmfyyy"
      const TEMPLATE_ID = "template_mm1q17p"
      const USER_ID = "RMT9M8_jgC-oREKzs"
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, data, USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Formulario enviado exitosamente');
        reset();
      })
      .catch((err) => {
        console.error('Error:', err);
        alert('Hubo un error al enviar el formulario');
      });
  };
  return (
    <>
      <section className="d-flex aboutme-container">
        <div className="w-50 p-4 d-flex align-items-center justify-content-center flex-column">
          <img
            className="image-me"
            src={"/public/images/yo.png"}
            alt="Ivan Priego"
          />
        </div>
        <div className="w-50 p-4 d-flex align-items-center justify-content-center flex-column">
          <h1 className="lora">
            Soy <span>Ivan Priego</span>,<br />
            Ingeniero en Comunicación Multimedia especializado en Desarrollo Web
          </h1>
          <p>
            Cuento amplia experiencia en lenguajes de estructuración y
            programación Front-End como HTML5, CSS3, JavaScript y JQuery.
          </p>
          <p>
            Capacidad para liderar, entrenar, dar coaching y fomentar el trabajo
            en equipo para el logro de resultados de alto desempeño, con apoyo
            de las plataformas Trello y smarsheet y metodologías agiles como
            scrum y Kanban.
          </p>
          <p>
            “El arte como la vida, es consecuencia de una serie de decisiones
            binarias.”
          </p>
        </div>
      </section>
      <section className="hobbies-container p-4">
        <h2>Gustos e Intereses</h2>
        <div className="d-flex mb-4">
          <div className="w-50 p-4 d-flex justify-content-center flex-column">
            <h3 className="lora">Bonsai</h3>
            <div className="separator"></div>
            <p>
              El bonsái es una disciplina artística que consiste en cultivar
              árboles y arbustos en macetas, controlando su tamaño y forma para
              que se vean como árboles maduros de tamaño natural.
            </p>
          </div>
          <div className="w-50 p-4">
            <img
              className="w-100 rounded hobbie-img"
              src={"/public/images/001.jpg"}
              alt="bonsai"
            />
          </div>
        </div>
        <div className="d-flex mb-4">
          <div className="w-50 p-4">
            <img
              className="w-100 rounded hobbie-img"
              src={"/public/images/002.jpg"}
              alt="bonsai"
            />
          </div>
          <div className="w-50 p-4 d-flex justify-content-center flex-column">
            <h3 className="lora">Padel</h3>
            <div className="separator"></div>
            <p>
              El pádel es un deporte de raqueta que se juega en parejas, en una
              pista rectangular cerrada y con cuatro paredes, donde se golpea la
              pelota con una pala para hacerla rebotar en el campo del oponente.
            </p>
          </div>
        </div>
        <div className="d-flex mb-4">
          <div className="w-50 p-4 d-flex justify-content-center flex-column">
            <h3 className="lora">Hotwheels</h3>
            <div className="separator"></div>
            <p>
              El coleccionismo de Hot Wheels es la práctica de coleccionar los
              juguetes de la marca Hot Wheels. Los Hot Wheels son un juguete de
              modelo clásico y popular, y son apreciados tanto por niños como
              por adultos.
            </p>
          </div>
          <div className="w-50 p-4">
            <img
              className="w-100 rounded hobbie-img"
              src={"/public/images/003.jpg"}
              alt="bonsai"
            />
          </div>
        </div>
        <div className="w-50 mx-auto my-5">
          <h2 className="lora">Contactame</h2>
          <div className="separator"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
              <input
                {...register('username', { required: true })}
                type="text"
                className="form-control"
                id="name"
                placeholder="Nombre"
              />
              {errors.name && <p>Este campo es obligatorio</p>}
            </div>
            <div className="form-group mb-3">
              <input
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              {errors.email && <p>Introduce un email válido</p>}
            </div>
            <div className="form-group mb-3">
              <textarea
                {...register('message', { required: true })}
                class="form-control"
                id="message"
                rows="3"
                placeholder="Mensaje"
              />
              {errors.message && <p>Este campo es obligatorio</p>}
            </div>
            <button type="submit" className="btn btn-outline-info btn-lg">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
