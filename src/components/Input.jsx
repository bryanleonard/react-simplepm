import { forwardRef } from 'react';

const Input = forwardRef(function Input({label, isTextarea = false, ...props}, ref) {
	const classes="w-full py-1 px-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
	const classesTextArea="";
	return (
		<p className="flex flex-col gap-1 my-4">
				<label className="text-sm font-bold uppercase text-stone-500">{label}</label>
				{isTextarea ? 
					<textarea ref={ref} className={`${classes} h-32`} {...props}/> 
				: 
					<input ref={ref} type="text" className={classes} {...props} />
				}
			</p>
	)
});

export default Input;