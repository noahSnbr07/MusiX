export default function Icon({ icon, className, ...props }) {
   return (
      <span {...props} className={`material-symbols-rounded ${className ? className : ''}`}>
         {icon}
      </span>
   )
}