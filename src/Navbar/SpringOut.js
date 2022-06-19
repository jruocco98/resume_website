import {useSpring, animated as a } from 'react-spring'

const SpringOut = ({children}) => {
    const animatedProps = useSpring({
        from: {marginLeft: 2, opacity: 1},
        opacity: 0,
        marginLeft: -215,
        config: {mass: 1, tension: 130, friction: 20},
    })
    return(
        <a.div className="spring-in" style={{position:'fixed',...animatedProps }}>
            {children}
        </a.div>
    )
}

export default SpringOut