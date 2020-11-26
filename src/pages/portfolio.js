import React from"react";
import NavBar from "../components/Nav/Nav";
import {Link} from "react-router-dom"

function Portfolio () {
    return (
     <>
            <NavBar/>
            <div classNameName="container">
        <div className="row">
            <div className="col-sm-3 float-left">
                <div className="card">
                            <img className="card-img-top cardImage" src="data:image/png;base64,
                    iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAjVBMVEUlKS////
                    8dICQiJisAABEMExx3eXw+QUUlKS4fIyoACBQgIyi8vb4XHCQLEx3HyMkAAAxPU
                    lYAAACur7ASGCDv7/DT1NWjpaaChIYuMTeJi40RFx8ABxQbICf19fU3OkCbnJ5SVF
                    iUlZdlZ2rd3t6eoKJ7fH+2t7nj4+Rpa25CRUpcXmJoaWyrrK3Ozs/htRidAAAFQUl
                    EQVR4nO2baVfyOhRGC2nQpgQqlMFCiyIqwoX///Nuhg5pbcEi4hvXs78YOwDZKyfnJ
                    AXHAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/KP4frfrk
                    9/+FJYi3Gkg8AK6Bf5vfxb76Hbh73J05PqE+IjfC1DSVIsUTfBFiKGMQF9bfFMZorctvpk
                    v6vQRAqHNnNZHUBCe5uTch4LmLIacaub9GwWhF3POY++HAigv90g1TP2u/f48xp97
                    UTTv7b0lb7oopJQu0o5z0aZ1qhfyoprjJUnG4Ct06tb9t/rxO7DnYSdjE8XiyIINaOUi
                    PhMcVsoZXx9E+6HG30FeVPce9fbMkoZYmj6Wh45BwoTP16TTrwxDqs4+e7IdJLL9Fldf
                    idypix7rJNQHqKnMr560gqBv2usMmcMj2egPxEmaR+lAnX3Q+iay3Wulj9SMPa3v3rziun37
                    eRbrkr1OxB22US1XTIrjd4HScTV9penNNGajPuKl2rbvT0+z/lYKYlMVxW528u5n9d
                    kcvOGTnvH2AV2I3Oo+Cj/xhzz0FN5An5E67m2sXIKt6vEuTP9XPacf0000cC7W53mii
                    Kw4rNdHCmc2Fi7kUXV4zEpHw5GAOt7CVWedUcBq9fFAoCqcULVSffFyH63fVm7tyrZiK
                    M3Gvm9l2Ry/GFYywpnKvOxhfcwSyobpwmXnylQ80vrYupMkyZCqO5KkM6Za31jVNZ2jY
                    75qg75yQX2DHl8VXaMkskZRKwmJQ8eqghlNi3y8dfXoG/Yl78pPz1Wap2Lk0nct/K6Ux
                    CehMf6a9Jn+LAvdLHNsXbmS6Gvew0zf8bM+E1PfuE6fGI7FOzXqy/3ZFrkCesgMsHysu
                    TWjb9JO33ai/4bFO/1NfeNmfcHLfK4ORPP5R9xCX2/gjvRC8KVIzn9Tn+rmZlmnj3lc5
                    4vVgsdOC31ilUf0snhdLJzP67Nwu0DPfRMx99F81yXXV1P37VcSb3JSnxxySzVxzorNq
                    0Z9xGJ9XIenfFITDoL9WX0PMRGMzuujaiPCyB2N+vIN01v2+0p42pheQMT/nddnls3n9
                    R3O68uP26jP4arD05Fs67XudfQxNRe8Fqn3bNlsYeYQ3dTF3XokopK/1Otbnda3rOqT+
                    SJQm17R2dRhcc0sSUdcZ7h3vMd5RZ8T63zBOG/WNxnxcFRadQSUU72W3p8uXIj5oOjmX
                    b8KrlEcd6r6Bqr8SF6jKK1hSvqY3mkdztf6NTJ9k0O01nVzXGRTc7eZEL/8hM3OvCtJ91z
                    q9bFs3Za4NaNv8Vy+8dOibWhs5BT6PpmzduaTxLukUV+6IVMs2sobVu7mtL6dseVC6qTZH
                    rqSOBwbXT4+e1rfUQ6dND7z0Vd+0kZWk+y211zfZJYdezOf+J7WZ2noKgiNe+PjZrud9qP
                    V0nPIbi7YK1N0NztuNsM5j+Wx6FHdEPdkWyRkj0bDzXbTn3N3HkV7j4jjL8HqSRyczlZh6
                    U3+qj0BiSlzXZdRrpwRLkgDz1uw5ZKKAkR+iyOrQ1RbPzFnS1ecJo6+Q37Tw/FC8WJsUX
                    ZySt/tOmotzfqszRq3pEmf5XF7K6r6fAG+U/plSvoQry0p2fvtD2MdJXsI2Zbco1D5Dn4
                    24d3nLfB1DGc+hl9bSt/cg762nP1VETgF9H0L/CTwW5i/OUDqaE9RLaNwuQCSbRPov1Y+
                    k/xNSo+HMPO1xvCH0L0Am79I9U8gH47DHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    AAAAAAAAABy/gfrN1HR8xKxOwAAAABJRU5ErkJggg=="/>
                    <div className="card-body">
                        <h5 className="card-title">GitHub</h5>
                        <p className="card-text">Take a look at my GitHub profile and repositories</p>
                        <Link href="https://github.com/Robmgraham" className="btn btn-primary">GitHub</Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-3 float-left">
                <div className="card">
                    <img className="card-img-top cardImage" src="https://user-images.githubusercontent.com/67080837/89377133-0a10a680-d6a6-11ea-85de-604d357270c5.png"/>
                    <div className="card-body">
                        <h5 className="card-title">Daily Planner app</h5>
                        <p className="card-text"> A daily planner to help you prioritize your day</p>
                        <Link href="https://robmgraham.github.io/Daily-Planner/" className="btn btn-primary">DAILY
                            PLANNER</Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-3 float-left">
                <div className="card">
                    <img className="card-img-top cardImage" src="https://user-images.githubusercontent.com/67080837/91235519-8bc68380-e6ea-11ea-9732-59f015ae6932.png"/>
                    <div className="card-body">
                        <h5 className="card-title">Job Finder app</h5>
                        <p className="card-text"> A Job Finder specifically for Javascript, HTML, CSS, and Python</p>
                        <Link href="https://msaviola.github.io/JobFinder/" className="btn btn-primary">Job Finder</Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-3 float-left">
                <div className="card">
                    <img className="card-img-top cardImage" src="\Images\Hypnos.png"/>
                    <div className="card-body">
                        <h5 className="card-title">Hypnos Sleep Tracker</h5>
                        <p className="card-text"> A sleep tracking app that helps the user regulate their sleep schedule</p>
                        <Link href="https://project-hypnos.herokuapp.com/" className="btn btn-primary">Hypnos Sleep Tracker</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>    
        </>
    )
}

export default Portfolio;
