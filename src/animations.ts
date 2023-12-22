export const heroAnimation = (isRotating:boolean) => {
  return {
      x: [80, 40, 40, 40, 0],
      y: [40, 40, 40, 0, 0],
      opacity: [1, 1, 1, 1, 0],
      rotateZ: isRotating ? [0, 0, 90, 90, 0]: undefined,
      transition: {
          ease: 'easeInOut',
          duration: 1.5,
      }
  }
}
export const reverseHeroAnimation = (isRotating:boolean) => {
  return {
    x: [0, 40, 40, 40, 80],
    y: [-40, 0, 0, 0, 0],
    opacity: [1, 1, 1, 1, 0],
    rotateZ:isRotating ? [0, 0, 90, 90, 0]: undefined,
    transition: {
        ease: 'easeInOut',
        duration: 1.5,
    },
}
}