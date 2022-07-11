import {useSpring, animated as a} from 'react-spring'

const BottomSlide = ({children, ...props}) => {

    const bottomSpring = useSpring({
        height:  (props.animationCheck) ? '30%' : '0%', 
        from: {
            height:'0%'
        },
        onRest: {
            height: () => {
            }
        },
        config: {mass: 1, tension: 210, friction: 24},
    })

    return (
        <a.div style={bottomSpring}>
            {children}
        </a.div>
      );
}
export default BottomSlide