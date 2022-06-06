import Blockly from 'blockly';

Blockly.Blocks['x_text_log'] = {
  init: function () {
    this.jsonInit({
      message0: 'log %1',
      args0: [
        {
          type: 'field_input',
          name: 'TEXT',
          text: '',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      inputsInline: true,
      style: 'text_blocks',
      tooltip: 'Log anything to the console.',
      helpUrl: '',
      extensions: ['text_quotes'],
    });
  },
};

Blockly.JavaScript['x_text_log'] = function (block: any) {
  const text = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));

  const value = Blockly.JavaScript.valueToCode(
    block,
    'VALUE',
    Blockly.JavaScript.ORDER_MEMBER,
  );

  return `console.log(${text}, ${value});\n`;
};

Blockly.inject('test', {
  zoom: {
    wheel: true,
  },
});

console.log(
  Blockly.JavaScript.provideFunction_,
  Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_,
  Blockly.JavaScript.nameDB_,
);
