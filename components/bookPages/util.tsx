import { useRef, useEffect } from 'react';

export const useControlledAnime =(pages:number[], anime:()=>any, currPage:number)=>{
	const tween = useRef<any>(null);
	useEffect(() => {
	if (pages.includes(currPage)) {
		if (!tween.current) {
			tween.current = anime();
			console.log("***tween", tween.current);
		} else {
			tween.current.play();
		}
	} else tween?.current?.pause();
}, [currPage, pages, anime]);
}

export function random(min: number, max: number) {
	return min + Math.random() * (max - min);
}