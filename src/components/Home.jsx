import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div id="crdbdy">
        <div className="card mb-3 mt-5 ml-5" Style={"max-width: 810px;"}>
        <div className="row no-gutters">
            <div className="col-md-4 crdimg1">
                <img src="https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538__340.jpg" Style={"height: 200px"} alt="NOT FOUND"/>
            </div>
            <div className="col-md-8 pl-3">
            <div className="card-body">
                <h5 className="card-title">Learning to Code</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural <br/>lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text ptxt1"><Link>Read More</Link></p>
            </div>
            </div>
        </div>
        </div>
        <div className="card mb-3 mt-5 ml-5" Style={"max-width: 810px;"}>
        <div className="row no-gutters">
            <div className="col-md-8">
            <div className="card-body">
                <h4 className="card-title">Mastering the Language</h4>
                <p className="card-text">This is a wider card with supporting text below as a natural<br/> lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text ptxt2"><Link>Read More</Link></p>
            </div>
            </div>
            <div className="col-md-4 crdimg2 img">
                <img src="https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538__340.jpg" Style={"height: 200px"} alt="NOT FOUND"/>
            </div>
        </div>
        </div>
        </div>
    )
}
