import {useSpring, animated as a } from 'react-spring'

const TopSlide = ({children,  ...props}) => {
    
    const animatedProps = useSpring({
        
        from: {height: '100%'},
        height: (props.animationCheck) ? '70%' : '100%',
        config: {mass: 1, tension: 210, friction: 24},
    })
    
    return(
        <a.div className="top-slide" style={{...animatedProps }}>
            {children}
        </a.div>
    )
}

export default TopSlide