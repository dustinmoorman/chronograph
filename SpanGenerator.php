<?php
/**
 * @author Dustin Moorman <dustin.moorman@gmail.com>
 * Span Generator for the chronograph.
 */

class SpanGenerator
{
    /**
     * An array of numbers (clock digit values) as keys,
     * and their textual representation as the value.
     * @var array
     */
    private $numbers_with_text = array();

    /**
     * Holds a single character 'h', 'm', or 's'.
     * Stands for hours, minutes, or seconds. Will ID the
     * spans based on this.
     * @var
     */
    private $hms;

    /**
     * Sets up numbers with text array, sorts them in
     * descending order.
     * @param array $numbers_with_text
     */
    public function __construct(array $numbers_with_text)
    {
        $this->numbers_with_text = $numbers_with_text;
        krsort($this->numbers_with_text);
    }

    /**
     * Produces the span.
     * @param string $id
     * @param string $contents
     * @return string
     */
    private function getSpan($id, $contents)
    {
        return '<span id="' . $id . '">' . $contents . '</span>';
    }

    /**
     * Iterates through the SpanGenerator::$numbers_with_text
     * array and builds a return string to be echoed to the
     * page with the constructed contents.
     * @return string
     */
    function getTextOutput()
    {
        $output = '';

        if(in_array($this->hms, array('h','m','s')))
        {
            foreach($this->numbers_with_text as $numbers => $text)
            {
                $output .= $this->getSpan($this->hms . $numbers, $text) . ' ';
            }
        }

        return $output;
    }

    /**
     * Setter for SpanGenerator::$hms.
     * @param string $hms
     */
    public function setHMS($hms)
    {
        $this->hms = $hms;
    }
}