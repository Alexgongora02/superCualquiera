import React from "react";

export default function QuieroTarjeta() {
  return (
    <div className="container py-3">
      <header>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Pricing</h1>
          <img className="" src="./assets/tarjvsmc.png" alt="" />
          <p className="fs-5 text-muted">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
      </header>

      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $0<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-primary"
                >
                  Sign up for free
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $15<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-white bg-primary border-primary">
                <h4 className="my-0 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $29<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="display-6 text-center mb-4">Compare plans</h2>

        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th style={{ width: "34%" }}></th>
                <th style={{ width: "22%" }}>Free</th>
                <th style={{ width: "22%" }}>Pro</th>
                <th style={{ width: "22%" }}>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Public
                </th>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Private
                </th>
                <td></td>
                <td>✅</td>
                <td>✅</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Permissions
                </th>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Sharing
                </th>
                <td></td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Unlimited members
                </th>
                <td></td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Extra security
                </th>
                <td></td>
                <td></td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img
              className="mb-2"
              src="/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt=""
              width="24"
              height="19"
            />
            <small className="d-block mb-3 text-muted">&copy; 2017–2021</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Cool stuff
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Random feature
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Team feature
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Stuff for developers
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Another one
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Resource
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Resource name
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Another resource
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Team
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Locations
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Privacy
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
