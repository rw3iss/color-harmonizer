# Color Harmonizer

This is  command line utility that processes any input files for color codes (hex only, rgb coming next), and classifies the colors to "nearest harmonic".

From this point it then allows you to tune the color scheme, and it will overwrite (or copy) the modified colors to the file.

The goal is to quickly convert any existing project's color schemes to something more "harmonic", while still maintaing the general color set and contrast visibility.


# Usage:
`harmonize <scale> -d <degrees> -i <input-file or directory> -o <output-file or directory> -p <input-file-pattern>`

This will read in all of the input files (according to optional -p regex rules), and convert their colors to the given <scale> (ie. a harmonic subset of a given set of input degees).

The degrees can be any number from 1-360, and it will produce a set of colors throughout the entire spectrum from degrees 0-360, repeated in the <scale> pattern.

The input colors will be matched with the nearest color in this this resulting harmonic spectrum, and then replaced in the output file.