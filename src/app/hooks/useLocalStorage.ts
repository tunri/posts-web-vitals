import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";


const parseJSON = <T>(value: string | null): T | undefined => {
	try {
		return value === "undefined" ? undefined : JSON.parse(value ?? "");
	} catch {
		return undefined;
	}
};

type SetValue<T> = Dispatch<SetStateAction<T>>;

const useLocalStorage = <T>(key: string, initialValue: T): [T, SetValue<T>] => {
	// leer localStorage
	const readValue = useCallback((): T => {
		if (typeof window === "undefined") {
			return initialValue;
		}

		try {
			const item = window.localStorage.getItem(key);
			return item ? (parseJSON(item) as T) : initialValue;
		} catch (error) {
			return initialValue;
		}
	}, [initialValue, key]);

	const [storedValue, setStoredValue] = useState<T>(readValue);

	const setValueRef = useRef<SetValue<T>>();

	setValueRef.current = (value) => {
		if (typeof window == "undefined") {
			console.log("error window undefined");
		}

		try {
			const newValue =
				value instanceof Function ? value(storedValue) : value;

			window.localStorage.setItem(key, JSON.stringify(newValue));
			setStoredValue(newValue);

		} catch (error) {
			console.log(`error guardar localStorage key “${key}”:`, error);
		}
	};

	const setValue: SetValue<T> = useCallback(
		(value) => setValueRef.current?.(value),
		[]
	);

	useEffect(() => {
		setStoredValue(readValue());
	}, []);

	return [storedValue, setValue];
};

export default useLocalStorage;
