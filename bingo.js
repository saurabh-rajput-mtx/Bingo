console.log("js-connected")
const words_list=['Project', 'without', 'through', 'himself', 'thought', 'against', 'nothing', 'another', 'between', 'because', 'something', 'country', 'Gutenberg', 'however', 'brought', 'present', 'certain', 'themselves', 'morning', 'hundred', 'received', 'believe', 'anything', 'herself', 'already', 'together', 'perhaps', 'English', 'children', 'several', 'therefore', 'whether', 'general', 'thousand', 'looking', 'following', 'business', 'electronic', 'answered', 'friends', 'towards', 'replied', 'different', 'question', 'England', 'possible', 'returned', 'Foundation', 'beautiful', 'subject', 'followed', 'evening', 'understand', 'written', 'carried', 'account', 'necessary', 'sometimes', 'character', 'reached', 'copyright', 'appeared', 'interest', 'General', 'continued', 'strange', 'further', 'feeling', 'Footnote', 'suddenly', 'brother', 'neither', 'CHAPTER', 'everything', 'suppose', 'natural', 'entered', 'position', 'American', 'remember', 'forward', 'although', 'purpose', 'knowledge', 'receive', 'daughter', 'husband', 'certainly', 'important', 'Literary', 'service', 'probably', 'especially', 'Archive', 'greater', 'letters', 'pleasure', 'including', 'remained', 'opinion', 'various', 'history', 'agreement',
'government', 'donations', 'persons', 'particular', 'information', 'attention', 'according', 'company', 'strength', 'gentleman', 'distance', 'beginning', 'standing', 'thinking', 'immediately', 'Captain', 'minutes', 'trouble', 'yourself', 'presence', 'learned', 'happened', 'influence', 'instead', 'condition', 'silence', 'outside', 'getting', 'whatever', 'thoughts', 'ancient', 'leaving', 'generally', 'property', 'afterwards', 'impossible', 'arrived',
'occasion', 'married', 'writing', 'entirely', 'blockquote', 'Charles', 'covered', 'appearance', 'respect', 'expression', 'stopped', 'William', 'considerable', 'somewhat', 'PROJECT', 'greatest', 'provide', 'perfect', 'exclaimed', 'scarcely', 'Christian', 'command', 'political', 'started', 'considered', 'British', 'allowed', 'expected', 'private', 'Government', 'language', 'individual', 'opportunity', 'waiting', 'observed', 'support', 'village', 'experience', 'himself', 'reading', 'circumstances', 'discovered', 'personal', 'speaking', 'offered', 'sitting', 'efforts', 'society', 'original', 'believed', 'difficult', 'conversation', 'produced', 'officers', 'paragraph', 'supposed', 'laughed', 'intended', 'determined', 'appears', 'direction', 'terrible', 'produce', 'prepared', 'attempt', 'associated', 'turning', 'usually', 'military', 'pleased', 'quickly', 'perfectly', 'authority', 'talking', 'passing', 'afternoon', 'declared', 'passage', 'soldiers', 'required', 'picture', 'pleasant', 'permission', 'marriage', 'religious', 'Perhaps', 'beneath', 'official', 'distribute', 'justice', 'straight', 'physical', 'religion', 'understood', 'instant', 'ordered', 'success', 'matters',
'obliged', 'fortune', 'provided', 'keeping', 'meeting', 'running', 'flowers', 'changed', "wouldnt", 'instance', 'directly', 'sufficient', 'happiness', 'journey', 'ourselves', 'conduct', 'possession', 'special', 'promise', 'situation', 'foreign', 'members', 'complete', 'passion', 'difficulty', 'courage', 'ordinary', 'concerning'
]
var arr_word_used=[]
// console.log(words_list.length)
const display_text=document.getElementById("display_word")
const gandom_number=function(){
    return Math.floor(Math.random()*(words_list.length+1))
}


const genrate=function(){
    var x=words_list[gandom_number()]
    if ( arr_word_used.includes(x) ){
        return genrate()
    } 
    else{
        arr_word_used.push(x)
        return x
    }

}

const container_id=document.getElementById("container")
const load_bingo=function(){
    var string_as_innnertext=""
    for (var i=0;i<25;i++){
        var val_inside_div=genrate()
        string_as_innnertext+=`<div class=block id=block`+i+` onmouseup="mouseUp(`+i+`)">` + val_inside_div + `</div>`
        console.log(i)
    }
    container_id.innerHTML=string_as_innnertext
}


const mouseUp=function(id){
    var block_id=document.getElementById("block"+id)
    var back_color=block_id.style.backgroundColor
    console.log(back_color)
    console.log(typeof(back_color))

    if (back_color=="rebeccapurple"){
        block_id.style.backgroundColor="white"
        block_id.style.color="rebeccapurple"
    }
    else{
        block_id.style.backgroundColor="rebeccapurple"
        block_id.style.color="white"
    }
}
