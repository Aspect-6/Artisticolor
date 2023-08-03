// import { ROUTES } from "@config/browser-routes.config";
// import { InputType } from "artisticolor/profile-box";

// export default function InputWrap({ type }: InputType) {
//     return (
//         <div className={type.toLowerCase()}>
//             <label className="labels">{type}:</label>
//             {
//                 type !== 'Password' ? ( //Input type doesn't = 'Password'
//                     <input 
//                         type={type.toLowerCase()} 
//                         id={type} 
//                         className="dataElements" 
//                         autoComplete={type.toLowerCase()}
//                         readOnly
//                     />
//                 ) : ( //Input type = 'Password'
//                     <input 
//                         type={type.toLowerCase()} 
//                         id={type} 
//                         className="dataElements" 
//                         autoComplete="current-password"
//                         readOnly
//                     />
//                 )
//             }
//             {
//                 type === 'Email' ? ( //type = 'Email'
//                     <img id="emIcon" src={`${ROUTES.ICONS}/email.png`} height="22px" />
//                 ) : type === 'Username' ? ( //type = 'Username'
//                     <img id="urIcon" src={`${ROUTES.ICONS}/user.png`} height="22px" />
//                 ) : ( //type = 'Password'
//                     <img id="pdIcon" src={`${ROUTES.ICONS}/closedEye.png`} height="22px" />
//                 )
//             }
//         </div>
//     );
// };