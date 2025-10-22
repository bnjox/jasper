import cleanup from "rollup-plugin-cleanup";
import filesize from "rollup-plugin-filesize";

export default {
	input: "src/index.js",
	plugins: [cleanup()],
	output: {
		file: "dist/jasper.js",
		format: "esm",
		name: "Runtime",
		plugins: [filesize()],
	},
};
