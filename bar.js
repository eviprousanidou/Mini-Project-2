    
export default function Bar(container){

    const margin = ({ top: 40, right: 20, bottom: 40, left: 90 });
    const width = 700 - margin.left - margin.right;
    const height = 150 - margin.top - margin.bottom;

    d3.csv('earthquakes1.csv', d3.autoType)
    .then(data=>{
    d = data;

    const width = 700 - margin.left - margin.right;
    const height = 150-margin.top - margin.bottom;
    
    const svg = d3.select(".bar")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
    
     
    svg.selectAll()
        .data(buildings)
        .enter()
        .append("rect")
        .attr('class', 'bar')
        /*fill in the table on click*/
            .on("click", function(d, i) {

                d3.select('.image').attr('src', "img/" + i.image)

                d3.select('.building-name').text(i.building)
                d3.select('.height').text(i.height_ft + " ft")    
                d3.select('.city').text(i.city)    
                d3.select('.country').text(i.country)    
                d3.select('.floors').text(i.floors)
                d3.select('.completed').text(i.completed)  

        })
        
        .attr('x', (d,i) => 220)
        .attr('y', (d,i) => (i* (width)/buildings.length)+10)
        .attr('width', (d,i) => d.height_px)
        .attr('height', 40)


        svg.selectAll()
            .data(d)
            .enter()
            .append("text")
            .attr("x", 0)
            .attr("y", (d,i) => (i* (width)/buildings.length) + 33)

            .text(function(d){
                return d.building
            })

            .attr("font-size", "14px")
            .attr("fill", "black")
            .attr("text-anchor", "front")

        /*fill in the bars*/
        svg.selectAll()
            .data(buildings)
            .enter()
            .append('text')
            .attr('dx', (d,i) => d.height_px +120)
            .attr('dy', (d,i) => ((i+1)* (width)/buildings.length)-15)
            .text(d => (d.height_ft + ' ft'))
            .attr('font-size', '12px')
            .attr('fill', 'black')

});

}