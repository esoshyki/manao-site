const getSlide = (id, text) => {
    const element = document.getElementById(id);
    element.innerText = text;
}


[
    `
// подключаем пространство имен класса HighloadBlockTable и даём ему псевдоним HLBT для удобной работы 
use Bitrix\Highloadblock\HighloadBlockTable as HLBT; 

// ID highloadblock'a
const EXP_HL_BLOCK_ID = 1; 

//подключаем модуль highloadblock 
CModule::IncludeModule('highloadblock'); 

//Функция получения экземпляра класса: 
function GetEntityDataClass($iHlBlockId) { 
    
    if (empty($iHlBlockId) || $iHlBlockId) < 1)
    {
        return false;
    }
    $hlblock = HLBT::getById($iHlBlockId)->fetch();   
    $entity = HLBT::compileEntity($hlblock);
    $entity_data_class = $entity->getDataClass();
    return $entity_data_class;
}

`,

    `
use Bitrix\Highloadblock\HighloadBlockTable as HLBT;
const EXP_HL_BLOCK_ID = 1;
CModule::IncludeModule('highloadblock');
$hlblock = HLBT::getById(EXP_HL_BLOCK_ID)->fetch();
$entity = HLBT::compileEntity($hlblock);
var_dump($entity->getFields());
`,

    `
<?
    const EXP_HL_BLOCK_ID = 1;
    CModule::IncludeModule('highloadblock');
    $entity_data_class = GetEntityDataClass(EXP_HL_BLOCK_ID);
    $rsData = $entity_data_class::getList(array(
       'select' => array('*')
    ));
    while($el = $rsData->fetch()){
        print_r($el);
    }
`,
    `
    const EXP_HL_BLOCK_ID = 1;
    CModule::IncludeModule('highloadblock');
    $entity_data_class = GetEntityDataClass(EXP_HL_BLOCK_ID);
    var_dump($entity_data_class::getCount());
`,
    `
    const EXP_HL_BLOCK_ID = 1;
    CModule::IncludeModule('highloadblock');
    $entity_data_class = GetEntityDataClass(EXP_HL_BLOCK_ID);
    $result = $entity_data_class::add(array(
          'UF_NAME'         => 'Желтый',
          'UF_CODE'         => 'YELLOW',
          'UF_VALUE'         => '#ffff00',
          'UF_ACTIVE'   => '1'
       ));
`,
    `
    const EXP_HL_BLOCK_ID = 1;
    CModule::IncludeModule('highloadblock');
    $id = 9;
    $entity_data_class = GetEntityDataClass(EXP_HL_BLOCK_ID);
    $result = $entity_data_class::delete($id);
`,
    `
const EXP_HL_BLOCK_ID = 1;
CModule::IncludeModule('highloadblock');
$id = 10;
$entity_data_class = GetEntityDataClass(MY_HL_BLOCK_ID);
$result = $entity_data_class::update($id, array(
  'UF_NAME'         => 'Фиолетовый',
  'UF_CODE'         => 'PURPLE',
  'UF_VALUE'         => '#5A009D',
  'UF_ACTIVE'   => '1'
));
`
].map((el, idx) => {
    getSlide("slide" + (idx + 1), el)
})