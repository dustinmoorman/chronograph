<?php
/**
 * @author Dustin Moorman <dustin.moorman@gmail.com>
 * Test for the SpanGenerator object used in the chronograph
 * to generate HTML Span elements for hours, minutes, and
 * seconds.
 */

class SpanGeneratorTest extends PHPUnit_Framework_TestCase
{
    /**
     * @var SpanGenerator
     */
    private $SpanGenerator;

    /**
     * Sets up a testable SpanGenerator object.
     */
    public function setUp()
    {
        $this->SpanGenerator = new SpanGenerator([
            '1' => 'awesome contents'
        ]);

        $this->SpanGenerator->setHMS('h');
    }

    /**
     * Tests the SpanGenerator::getTextOutput() method.
     */
    public function testGetTextOutput()
    {
        $this->assertEquals(
            '<span id="h1">awesome contents</span> ',
            $this->SpanGenerator->getTextOutput()
        );
    }
}
