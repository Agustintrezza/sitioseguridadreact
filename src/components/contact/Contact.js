import React from 'react'
import './ContactStyles.css'

export const Contact = () => {
  return (
    <div className="contact">
        <div className="container">
            <div className="form-container">
                <form>
                    <h1><span>Contácto</span></h1>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder="Ingresá tu Nombre"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder="Ingresá tu Email"/>
                    </div>
                    <div>
                        <label>Comentario</label>
                        <textarea rows='10' placeholder="Ingresá tu mensaje aquí"/>
                    </div>

                    <button>Enviar</button>

                </form>
            </div>
        </div>
    </div>
  )
}
