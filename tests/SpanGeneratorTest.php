<?php
/**
 * @author Dustin Moorman <dustin.moorman@gmail.com>
 *
 */
require_once '/classes/SpanGenerator.php';

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