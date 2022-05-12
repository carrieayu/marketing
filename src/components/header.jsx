import bgvid from '../assets/bgvid.mp4';


export const Header = (props) => {
  return (
    <header id='header'>
       
      <div className='intro'>
          <div className='container'>
            <div className='videoWrapper'>
                <video  src={bgvid} autoPlay loop muted/>
            </div>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <div>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                  >
                  Learn More
                </a>{' '}
                  </div>
              </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// export const Header = (props) => {
//   return (
//     <div className="headercontainer">
//         <video  src={bgvid} autoPlay loop muted/>
//       <div className='overlay'>
//         <div className='headercontent'>
//           <h1>
//             {props.data ? props.data.title : 'Loading'}
//             <span></span>
//           </h1>
//           <p>{props.data ? props.data.paragraph : 'Loading'}</p>
//           <a
//             href='#features'
//             className='btn btn-custom btn-lg page-scroll'
//           >
//             Learn More
//           </a>{' '}
//         </div>
//       </div>
//     </div>

//   )
// }