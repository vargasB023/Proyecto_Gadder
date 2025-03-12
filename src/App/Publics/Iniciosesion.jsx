import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class inicioSesion extends PureComponent { 
  constructor(props) {
    super(props); 
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = (value) => {
    this.setState({ email: value });
  };

  handlePasswordChange = (value) => {
    this.setState({ password: value });
  };

  handleSubmit = () => {

    console.log('Email:', this.state.email);
    console.log('Password:', this.state.password);
  };

  render() {
    return (
      <>
        <section className="flex items-center justify-center min-h-screen bg-gray-100">
          <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
            <form onSubmit={(e) => { e.preventDefault(); this.handleSubmit(); }}>
              <section className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  value={this.state.email}
                  onChange={(e) => this.handleEmailChange(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ingresa tu correo electrónico"
                  required
                />
              </section>
              <section className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={(e) => this.handlePasswordChange(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </section>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Iniciar Sesión
              </button>
            </form>
            <section className="mt-4 text-center">
              <p className="text-gray-600">
                ¿No tienes una cuenta?{' '}
                <Link to="/register" className="text-blue-500 hover:underline">
                  Regístrate aquí
                </Link>
              </p>
              <p className="text-gray-600 mt-2">
                ¿Olvidaste tu contraseña?{' '}
                <Link to="/forgot-password" className="text-blue-500 hover:underline">
                  Recupérala aquí
                </Link>
              </p>
            </section>
          </section>
        </section>
      </>
    );
  }
}