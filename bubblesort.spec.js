describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('can handle most simple pair', function(){
	var test0 = [5,3];
	expect(bubbleSort(test0)).toEqual([3,5]);
  });

  it('can return sorted arrays for a backwards array, odd number of elements', function(){
	var test1 = [7,6,4,2,1];	
	expect(bubbleSort(test1)).toEqual([1,2,4,6,7]);
	
  });
  it('can return sorted array for random array, even number of elements', function(){
	var test2 = [3,8,3,7,1,999];
	expect(bubbleSort(test2)).toEqual([1,3,3,7,8,999]);
  });
});
