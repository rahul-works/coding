/**
 * @param {number[]} nums
 */
let queue = [];
let hash = {};
var FirstUnique = function(nums) {
    if (nums !== undefined && nums.length > 0) {
        queue = [...nums];
        for (const val of nums) {
            if (hash[val] !== undefined) {
                hash[val] += 1;
            } else {
                hash[val] = 1;
            }
        }
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    for (const num of queue) {
        if(hash[num] === 1) {
            return num;
        }
    }
    return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    if (value !== undefined) {
        if (hash[value] !== undefined) {
            hash[value] += 1;
        } else {
            hash[value] = 1;
        }
        queue.push(value);
    }
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
// obj = new FirstUnique([ 2, 3, 5 ]);
// obj.showFirstUnique();
// obj.add(5)
// obj.showFirstUnique();
// obj.add(2)
// obj.showFirstUnique();
// obj.add(3)
// obj.showFirstUnique();

const operation = ["FirstUnique","add","add","add","showFirstUnique","showFirstUnique","add","showFirstUnique","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","showFirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","showFirstUnique","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","showFirstUnique","add","add","showFirstUnique","add","add","add","add","showFirstUnique","add","add","add","add","add","add","showFirstUnique","add","add","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","showFirstUnique","add","showFirstUnique","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","showFirstUnique","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","showFirstUnique","add","showFirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","showFirstUnique","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","showFirstUnique","add","add","showFirstUnique","add","add","add","add","showFirstUnique","add","add","showFirstUnique","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","showFirstUnique","showFirstUnique","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","showFirstUnique","add","add","showFirstUnique","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","showFirstUnique","add","add","showFirstUnique","add","add","showFirstUnique","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","showFirstUnique","add","add","add","showFirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique","showFirstUnique","add","add","add","add","add","add","add","showFirstUnique","showFirstUnique","add","add","showFirstUnique","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","showFirstUnique","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","showFirstUnique","add","add","add","add","add","add","add","showFirstUnique"]
const ip = [[[392,59,691,331,805,15,180,248,114,62,643,401,316,764,793,234,821,304,441,905,983,815,38,560,526,259,995,343,165,648,995,945,401,414,44,16,224,423,933,452,152,893,116,570,343,317,263,311,600,928,573,859,540,739,244,994,409,429,892,277,413,481,88,445,744,706,971,136,233,250,584,619,439,316,601,120,245,252,187,844,48,139,412,778,316,929,8,182,839,868,15,793,31,733,987,69,212,319,594,485,955,598,543,68,947,719,552,763,520,543,487,62,740,694,293,52,599,998,414,479,292,954,195,846,143,384,186,113,490,956,64,708,654,701,297,187,236,514,607,409,462,427,87,503,566,835,17,327,395,4,87,605,24,293,141,648,62,919,749,291,760,322,84,274,306,734,495,550,925,434,848,869,873,904,442,772,858,9,729,956,85,404,882,305,674,172,398,582,915,428,475,516,459,939,239,673,837,227,262,921,506,8,110,122,294,187,964,941,168,380,803,698,886,361,464,1,162,30,955,264,225,347,302,553,771,492,2,694,764,147,608,620,455,378,367,306,303,5,306,467,973,233,579,923,965,137,586,499,896,941,372,854,483,794,610,746,751,64,106,229,939,966,40,962,75,27,136,215,687,439,414,416,564,963,789,171,364,229,327,77,31,493,900,972,639,355,262,832,315,148,824,559,763,320,76,802,882,685,399,63,843,304,551,710,774,519,275,883,204,576,387,808,709,912,363,99,82,959,626,304,604,716,273,468,807,352,379,708,246,825,638,434,974,402,153,46,275,946,883,202,37,925,649,431,562,310,445,713,578,521,814,616,670,963,667,852,984,813,168,969,270,729,877,795,232,908,402,312,431,946,386,463,692,458,93,330,492,390,619,819,573,903,147,363,354,625,783,358,991,292,476,757,660,83,872,523,135,750,835,793,749,777,740,665,993,779,259,921,215,551,838,244,47,976,782,907,63,448,945,115,730,180,423,895,909,407,138,955,282,919,429,894,935,124,469,459,503,135,667,530,543,60,157,600,947,792,417,528,349,622,285,738,575,48,885,809,661,405,965,923,721,209,582,587,185,825,974,67,349,745,953,2,628,404,226,165,299,811,366,935,215,440,196,218,348,266,810,565,126,988,520,855,305,255,72,987,714,496,159,673,268,645,658,572,600,898,166,942,431,864,373,702,201,257,14,588,483,730,870,610,804,106,315,780,204,986,223,259,442,333,690,504,492,874,344,73,391,56,797,852,581,879,40,12,792,802,940,696,562,312,165,306,391,241,410,284,248,296,89,682,238,262,647,245,257,23,389,451,227,270,635,401,589,268,839,94,279,973,827,657,129,699,674,142,304,682,515,688,173,413,788,766,189,239,864,80,516,488,129,662,294,138,714,772,970,239,704,51,358,916,975,653]],[810],[357],[544],[],[],[793],[],[766],[93],[625],[546],[841],[],[24],[33],[943],[611],[665],[43],[236],[493],[353],[],[178],[128],[104],[],[],[308],[727],[341],[164],[658],[],[786],[98],[523],[507],[584],[768],[349],[360],[647],[805],[796],[18],[790],[329],[],[737],[504],[392],[191],[110],[337],[379],[386],[902],[],[],[864],[393],[154],[316],[501],[794],[52],[178],[486],[738],[106],[474],[344],[360],[601],[945],[785],[703],[117],[713],[975],[333],[561],[236],[626],[775],[279],[302],[838],[457],[705],[],[110],[812],[618],[735],[559],[419],[399],[],[275],[427],[],[732],[762],[689],[434],[],[1000],[585],[355],[124],[487],[181],[],[700],[58],[555],[],[470],[],[837],[],[615],[636],[467],[632],[81],[699],[86],[662],[102],[209],[],[399],[436],[856],[357],[836],[351],[31],[943],[686],[271],[205],[51],[964],[],[89],[850],[],[158],[],[595],[680],[39],[448],[975],[],[135],[270],[449],[806],[377],[102],[983],[],[152],[63],[368],[45],[441],[950],[494],[646],[327],[17],[604],[298],[649],[491],[255],[766],[354],[993],[844],[159],[],[874],[711],[634],[727],[845],[34],[193],[417],[878],[577],[680],[626],[365],[399],[50],[560],[569],[528],[225],[164],[979],[],[673],[],[12],[957],[854],[975],[995],[76],[618],[138],[131],[],[308],[618],[464],[145],[20],[816],[491],[70],[553],[559],[346],[124],[],[858],[541],[350],[379],[805],[986],[620],[846],[724],[197],[958],[659],[47],[],[284],[714],[],[573],[890],[431],[931],[124],[284],[42],[123],[875],[738],[],[194],[539],[365],[],[294],[805],[389],[584],[995],[284],[147],[897],[620],[814],[199],[300],[766],[343],[943],[677],[40],[615],[],[338],[760],[405],[],[341],[577],[417],[536],[944],[716],[449],[27],[],[76],[],[],[750],[99],[153],[763],[482],[],[66],[291],[292],[458],[],[573],[66],[259],[119],[342],[800],[688],[883],[97],[],[],[202],[349],[686],[478],[419],[953],[844],[253],[840],[485],[72],[278],[214],[650],[669],[163],[263],[581],[663],[],[258],[661],[925],[435],[584],[628],[307],[],[730],[932],[],[170],[593],[349],[366],[],[519],[815],[],[830],[82],[593],[418],[797],[289],[159],[],[846],[961],[850],[583],[971],[92],[971],[839],[501],[39],[],[412],[785],[],[739],[639],[472],[939],[157],[407],[249],[789],[211],[144],[],[],[145],[601],[755],[788],[902],[370],[609],[638],[436],[],[752],[690],[973],[160],[345],[884],[561],[851],[845],[397],[396],[129],[739],[973],[450],[160],[473],[],[],[447],[328],[452],[564],[6],[707],[965],[545],[928],[17],[901],[858],[416],[410],[842],[284],[566],[569],[960],[719],[443],[747],[93],[47],[923],[],[542],[],[392],[753],[],[126],[659],[344],[578],[792],[],[524],[182],[899],[795],[728],[424],[268],[841],[459],[932],[674],[857],[986],[228],[700],[97],[924],[460],[245],[220],[214],[941],[712],[801],[310],[724],[452],[709],[958],[410],[562],[152],[873],[477],[513],[378],[142],[549],[],[83],[903],[128],[545],[501],[145],[923],[552],[420],[970],[791],[433],[740],[],[917],[463],[112],[609],[76],[173],[],[688],[75],[],[102],[617],[],[204],[321],[115],[453],[66],[],[984],[331],[871],[270],[780],[387],[360],[109],[684],[326],[528],[429],[],[55],[519],[148],[588],[337],[],[591],[409],[369],[],[],[440],[551],[423],[729],[483],[],[],[637],[732],[557],[482],[936],[210],[328],[],[],[23],[156],[],[783],[618],[210],[744],[292],[994],[155],[],[729],[72],[334],[174],[395],[93],[268],[853],[729],[],[929],[439],[619],[832],[478],[638],[654],[162],[650],[747],[838],[28],[747],[332],[506],[215],[893],[820],[621],[],[973],[330],[647],[774],[75],[314],[778],[503],[],[885],[454],[80],[84],[487],[194],[551],[489],[644],[615],[657],[356],[636],[741],[714],[],[83],[73],[],[34],[],[675],[570],[756],[375],[81],[790],[323],[456],[594],[590],[80],[498],[651],[546],[450],[],[722],[946],[332],[154],[136],[353],[22],[122],[899],[672],[667],[986],[357],[622],[873],[866],[820],[627],[820],[],[623],[698],[685],[167],[159],[345],[425],[],[337],[699],[787],[668],[77],[678],[234],[]]

let obj1;
for (const key in ip) {
    if (key === '0') {
        obj1 = new FirstUnique(ip[key][0]);
    } else {
        if (ip[key].length === 0){
            obj1.showFirstUnique();
        } else if (ip[key].length === 1) {
            obj1.add(ip[key][0]);
        } else {
            console.log (' ---------- ---------- INVALID DATA -------------------- ');
            console.log(ip[key]); break;
        }
        if( key === '600') {
            console.log(obj1.showFirstUnique());
            console.log(hash['59'])
            console.log('index 59:'+queue.indexOf(59));
            console.log(hash['691'])
            console.log('index 691:'+queue.indexOf(691)); break;
        }
    }
}