// 807. Max Increase to Keep City Skyline
// https://leetcode.com/problems/max-increase-to-keep-city-skyline/

const grid = [ [3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0] ]

const maxIncreaseKeepingSkyline = (grid) => {
    const len = grid.length
    // get skyline height for top and left
    const top = [...Array(len)].map(() => 0) // creates array full of zeros
    // find max building height for each column
    grid.forEach(row => {
        row.forEach((building, i) => {
            if (building > top[i]) top[i] = building
        })
    })

    // find max building height for each row
    const left = grid.map(row => Math.max(...row))

    // get the total height increase available without changing skyline
    let totalHeightIncrease = 0
    for (let rowIndex = 0; rowIndex < len; rowIndex++) {
        for (let colIndex = 0; colIndex < len; colIndex++) {
            // max height for building without affecting skyline
            const maxBuildingHeight = Math.min(left[rowIndex], top[colIndex])
            const buildingHeightIncrease = maxBuildingHeight - grid[rowIndex][colIndex]
            // add height increase to total
            totalHeightIncrease += buildingHeightIncrease
        }
    }
    return totalHeightIncrease
}