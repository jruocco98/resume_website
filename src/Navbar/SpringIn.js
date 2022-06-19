import {useSpring, animated as a } from 'react-spring'

const SpringIn = ({children}) => {
    const animatedProps = useSpring({
        from: {marginLeft: -200, opacity: 0},
        opacity: 1,
        marginLeft: 2,
        config: {mass: 1, tension: 130, friction: 20},
    })
    return(
        <a.div className="spring-in" style={{position:'fixed', ...animatedProps}}>
            {children}
        </a.div>
    )
}

export default SpringIn