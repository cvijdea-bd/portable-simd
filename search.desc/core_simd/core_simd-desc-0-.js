searchState.loadedDescShard("core_simd", 0, "Portable SIMD module.\nPortable SIMD module.\nThe number of bytes in a bitmask with this many lanes.\nThis type, reinterpreted as bytes.\nMap from the elements of the input vector to the output …\nNumber of elements in this vector.\nSpecifies the number of lanes in a SIMD vector as a type.\nA SIMD vector mask for <code>N</code> elements of width specified by …\nThe mask element type corresponding to this element type.\nMarker trait for types that may be used as SIMD mask …\nA SIMD vector with the shape of <code>[T; N]</code> but the operations …\nSupporting trait for <code>Simd::cast</code>.  Typically doesn’t need …\nMarker trait for types that may be used as SIMD vector …\nStatically guarantees that a lane count is marked as …\nCreate a vector from the elements of another vector.\nConvert SIMD vectors to vectors of bytes\nReturns true if all elements are set, or false otherwise.\nReturns true if any element is set, or false otherwise.\nReturns an array reference containing the entire SIMD …\nReturns a mutable array reference containing the entire …\nConverts the mask to a mask of any other element size.\nTraits for comparing and ordering vectors.\nCreate a new vector from the elements of <code>first</code> and <code>second</code>.\nCreate a new vector from the elements of <code>first</code> and <code>second</code>.\nCreate a new mask from the elements of <code>first</code> and <code>second</code>.\nCreate a new mask from the elements of <code>first</code> and <code>second</code>.\nWrites a SIMD vector to the first <code>N</code> elements of a slice.\nDeinterleave two masks.\nDeinterleave two vectors.\nExtract a vector from another vector.\nExtract a vector from another vector.\nA SIMD vector with one element of type <code>f32</code>.\nA SIMD vector with 16 elements of type <code>f32</code>.\nA SIMD vector with two elements of type <code>f32</code>.\nA SIMD vector with 32 elements of type <code>f32</code>.\nA SIMD vector with four elements of type <code>f32</code>.\nA SIMD vector with 64 elements of type <code>f32</code>.\nA SIMD vector with eight elements of type <code>f32</code>.\nA SIMD vector with one element of type <code>f64</code>.\nA SIMD vector with 16 elements of type <code>f64</code>.\nA SIMD vector with two elements of type <code>f64</code>.\nA SIMD vector with 32 elements of type <code>f64</code>.\nA SIMD vector with four elements of type <code>f64</code>.\nA SIMD vector with 64 elements of type <code>f64</code>.\nA SIMD vector with eight elements of type <code>f64</code>.\nFind the index of the first set element.\nA <code>Simd&lt;T, N&gt;</code> has a debug format like the one for <code>[T]</code>:\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts an array of bools to a SIMD mask.\nConverts an array to a SIMD vector.\nCreate an integer value from its representation as a byte …\nCreate a mask from a bitmask.\nConverts a vector of integers to a mask, where 0 …\nConverts a vector of integers to a mask, where 0 …\nCreate an integer value from its representation as a byte …\nCreate a native endian integer value from its memory …\nConverts a slice to a SIMD vector containing <code>slice[..N]</code>.\nReads from potentially discontiguous indices in <code>slice</code> to …\nReads from indices in <code>slice</code> to construct a SIMD vector. If …\nRead elementwise from pointers into a SIMD vector.\nReads from indices in <code>slice</code> to construct a SIMD vector. …\nConditionally read elementwise from pointers into a SIMD …\nReads from indices in <code>slice</code> to construct a SIMD vector. …\nA SIMD vector with one element of type <code>i16</code>.\nA SIMD vector with 16 elements of type <code>i16</code>.\nA SIMD vector with two elements of type <code>i16</code>.\nA SIMD vector with 32 elements of type <code>i16</code>.\nA SIMD vector with four elements of type <code>i16</code>.\nA SIMD vector with 64 elements of type <code>i16</code>.\nA SIMD vector with eight elements of type <code>i16</code>.\nA SIMD vector with one element of type <code>i32</code>.\nA SIMD vector with 16 elements of type <code>i32</code>.\nA SIMD vector with two elements of type <code>i32</code>.\nA SIMD vector with 32 elements of type <code>i32</code>.\nA SIMD vector with four elements of type <code>i32</code>.\nA SIMD vector with 64 elements of type <code>i32</code>.\nA SIMD vector with eight elements of type <code>i32</code>.\nA SIMD vector with one element of type <code>i64</code>.\nA SIMD vector with 16 elements of type <code>i64</code>.\nA SIMD vector with two elements of type <code>i64</code>.\nA SIMD vector with 32 elements of type <code>i64</code>.\nA SIMD vector with four elements of type <code>i64</code>.\nA SIMD vector with 64 elements of type <code>i64</code>.\nA SIMD vector with eight elements of type <code>i64</code>.\nA SIMD vector with one element of type <code>i8</code>.\nA SIMD vector with 16 elements of type <code>i8</code>.\nA SIMD vector with two elements of type <code>i8</code>.\nA SIMD vector with 32 elements of type <code>i8</code>.\nA SIMD vector with four elements of type <code>i8</code>.\nA SIMD vector with 64 elements of type <code>i8</code>.\nA SIMD vector with eight elements of type <code>i8</code>.\nInterleave two masks.\nInterleave two vectors.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA SIMD vector with one element of type <code>isize</code>.\nA SIMD vector with 16 elements of type <code>isize</code>.\nA SIMD vector with two elements of type <code>isize</code>.\nA SIMD vector with 32 elements of type <code>isize</code>.\nA SIMD vector with four elements of type <code>isize</code>.\nA SIMD vector with 64 elements of type <code>isize</code>.\nA SIMD vector with eight elements of type <code>isize</code>.\nReturns the number of elements in this SIMD vector.\nReads contiguous elements from <code>slice</code>. Elements are read so …\nReads contiguous elements from <code>slice</code>. Elements are read so …\nReads contiguous elements from <code>slice</code>. Each element is read …\nReads contiguous elements from <code>slice</code>. Each element is read …\nReads contiguous elements starting at <code>ptr</code>. Each element is …\nReads contiguous elements from <code>slice</code>. Each element is read …\nA SIMD mask with one element for vectors with 16-bit …\nA SIMD mask with 16 elements for vectors with 16-bit …\nA SIMD mask with two elements for vectors with 16-bit …\nA SIMD mask with 32 elements for vectors with 16-bit …\nA SIMD mask with four elements for vectors with 16-bit …\nA SIMD mask with 64 elements for vectors with 16-bit …\nA SIMD mask with eight elements for vectors with 16-bit …\nA SIMD mask with one element for vectors with 32-bit …\nA SIMD mask with 16 elements for vectors with 32-bit …\nA SIMD mask with two elements for vectors with 32-bit …\nA SIMD mask with 32 elements for vectors with 32-bit …\nA SIMD mask with four elements for vectors with 32-bit …\nA SIMD mask with 64 elements for vectors with 32-bit …\nA SIMD mask with eight elements for vectors with 32-bit …\nA SIMD mask with one element for vectors with 64-bit …\nA SIMD mask with 16 elements for vectors with 64-bit …\nA SIMD mask with two elements for vectors with 64-bit …\nA SIMD mask with 32 elements for vectors with 64-bit …\nA SIMD mask with four elements for vectors with 64-bit …\nA SIMD mask with 64 elements for vectors with 64-bit …\nA SIMD mask with eight elements for vectors with 64-bit …\nA SIMD mask with one element for vectors with 8-bit …\nA SIMD mask with 16 elements for vectors with 8-bit …\nA SIMD mask with two elements for vectors with 8-bit …\nA SIMD mask with 32 elements for vectors with 8-bit …\nA SIMD mask with four elements for vectors with 8-bit …\nA SIMD mask with 64 elements for vectors with 8-bit …\nA SIMD mask with eight elements for vectors with 8-bit …\nA SIMD mask with one element for vectors with …\nA SIMD mask with 16 elements for vectors with …\nA SIMD mask with two elements for vectors with …\nA SIMD mask with 32 elements for vectors with …\nA SIMD mask with four elements for vectors with …\nA SIMD mask with 64 elements for vectors with …\nA SIMD mask with eight elements for vectors with …\nTraits for vectors with numeric elements.\nThe portable SIMD prelude.\nTraits for vectors of pointers.\nResize a mask.\nResize a vector.\nReverse the order of the elements in the mask.\nReverse the order of the elements in the vector.\nRotates the mask such that the first <code>OFFSET</code> elements of …\nRotates the vector such that the first <code>OFFSET</code> elements of …\nRotates the mask such that the first <code>self.len() - OFFSET</code> …\nRotates the vector such that the first <code>self.len() - OFFSET</code> …\nWrites the values in a SIMD vector to potentially …\nWrite pointers elementwise into a SIMD vector.\nWrites values from a SIMD vector to multiple potentially …\nConditionally write pointers elementwise into a SIMD …\nWrites values from a SIMD vector to multiple potentially …\nChoose elements from two vectors.\nChoose elements from two masks.\nSets the value of the specified element.\nSets the value of the specified element.\nConstructs a new SIMD vector by copying elements from …\nConstruct a mask by setting all elements to the given …\nConstructs a new SIMD vector with all elements set to the …\nConditionally write contiguous elements to <code>slice</code>. The …\nConditionally write contiguous elements starting from <code>ptr</code>. …\nConditionally write contiguous elements to <code>slice</code>. The …\nCreate a new vector from the elements of <code>vector</code>.\nCreate a new vector from the elements of <code>vector</code>.\nSwizzle a vector of bytes according to the index vector. …\nCreate a new mask from the elements of <code>mask</code>.\nCreate a new mask from the elements of <code>mask</code>.\nTests the value of the specified element.\nTests the value of the specified element.\nConverts a SIMD mask to an array of bools.\nConverts a SIMD vector to an array.\nReturn the memory representation of this integer as a byte …\nCreate a bitmask from a mask.\nConverts the mask to a vector of integers, where 0 …\nReturn the memory representation of this integer as a byte …\nReturn the memory representation of this integer as a byte …\nA SIMD vector with one element of type <code>u16</code>.\nA SIMD vector with 16 elements of type <code>u16</code>.\nA SIMD vector with two elements of type <code>u16</code>.\nA SIMD vector with 32 elements of type <code>u16</code>.\nA SIMD vector with four elements of type <code>u16</code>.\nA SIMD vector with 64 elements of type <code>u16</code>.\nA SIMD vector with eight elements of type <code>u16</code>.\nA SIMD vector with one element of type <code>u32</code>.\nA SIMD vector with 16 elements of type <code>u32</code>.\nA SIMD vector with two elements of type <code>u32</code>.\nA SIMD vector with 32 elements of type <code>u32</code>.\nA SIMD vector with four elements of type <code>u32</code>.\nA SIMD vector with 64 elements of type <code>u32</code>.\nA SIMD vector with eight elements of type <code>u32</code>.\nA SIMD vector with one element of type <code>u64</code>.\nA SIMD vector with 16 elements of type <code>u64</code>.\nA SIMD vector with two elements of type <code>u64</code>.\nA SIMD vector with 32 elements of type <code>u64</code>.\nA SIMD vector with four elements of type <code>u64</code>.\nA SIMD vector with 64 elements of type <code>u64</code>.\nA SIMD vector with eight elements of type <code>u64</code>.\nA SIMD vector with one element of type <code>u8</code>.\nA SIMD vector with 16 elements of type <code>u8</code>.\nA SIMD vector with two elements of type <code>u8</code>.\nA SIMD vector with 32 elements of type <code>u8</code>.\nA SIMD vector with four elements of type <code>u8</code>.\nA SIMD vector with 64 elements of type <code>u8</code>.\nA SIMD vector with eight elements of type <code>u8</code>.\nA SIMD vector with one element of type <code>usize</code>.\nA SIMD vector with 16 elements of type <code>usize</code>.\nA SIMD vector with two elements of type <code>usize</code>.\nA SIMD vector with 32 elements of type <code>usize</code>.\nA SIMD vector with four elements of type <code>usize</code>.\nA SIMD vector with 64 elements of type <code>usize</code>.\nA SIMD vector with eight elements of type <code>usize</code>.\nThe mask type returned by each comparison.\nParallel <code>Ord</code>.\nParallel <code>PartialEq</code>.\nParallel <code>PartialOrd</code>.\nRestrict each element to a certain interval.\nTest if each element is equal to the corresponding element …\nTest if each element is greater than or equal to the …\nTest if each element is greater than the corresponding …\nTest if each element is less than or equal to the …\nTest if each element is less than the corresponding …\nReturns the element-wise maximum with <code>other</code>.\nReturns the element-wise minimum with <code>other</code>.\nTest if each element is equal to the corresponding element …\nBit representation of this SIMD vector type.\nA SIMD vector with a different element type.\nA SIMD vector with a different element type.\nA SIMD vector with a different element type.\nMask type used for manipulating this SIMD vector type.\nMask type used for manipulating this SIMD vector type.\nScalar type contained by this SIMD vector type.\nScalar type contained by this SIMD vector type.\nScalar type contained by this SIMD vector type.\nOperations on SIMD vectors of floats.\nOperations on SIMD vectors of signed integers.\nOperations on SIMD vectors of unsigned integers.\nA SIMD vector of unsigned integers with the same element …\nProduces a vector where every element has the absolute …\nLanewise absolute value, implemented in Rust. Every …\nPerforms elementwise conversion of this vector’s …\nPerforms elementwise conversion of this vector’s …\nPerforms elementwise conversion of this vector’s …\nReturns each element with the magnitude of <code>self</code> and the …\nRaw transmutation from an unsigned integer vector type …\nReturns true for each element if its value is neither …\nReturns true for each element if its value is positive …\nReturns true for each element if its value is <code>NaN</code>.\nReturns true for each negative element and false if it is …\nReturns true for each element if its value is neither …\nReturns true for each positive element and false if it is …\nReturns true for each element if it has a negative sign, …\nReturns true for each element if it has a positive sign, …\nReturns true for each element if its value is subnormal.\nReturns the number of leading ones in the binary …\nReturns the number of leading ones in the binary …\nReturns the number of leading zeros in the binary …\nReturns the number of leading zeros in the binary …\nTakes the reciprocal (inverse) of each element, <code>1/x</code>.\nReturns the cumulative bitwise “and” across the …\nReturns the cumulative bitwise “and” across the …\nReturns the maximum element in the vector.\nReturns the maximum element in the vector.\nReturns the maximum element in the vector.\nReturns the minimum element in the vector.\nReturns the minimum element in the vector.\nReturns the minimum element in the vector.\nReturns the cumulative bitwise “or” across the …\nReturns the cumulative bitwise “or” across the …\nReducing multiply.  Returns the product of the elements of …\nReturns the product of the elements of the vector, with …\nReturns the product of the elements of the vector, with …\nReturns the sum of the elements of the vector.\nReturns the sum of the elements of the vector, with …\nReturns the sum of the elements of the vector, with …\nReturns the cumulative bitwise “xor” across the …\nReturns the cumulative bitwise “xor” across the …\nReverses the order of bits in each elemnent. The least …\nReverses the order of bits in each elemnent. The least …\nLanewise saturating absolute value, implemented in Rust. …\nLanewise saturating add.\nLanewise saturating add.\nLanewise saturating negation, implemented in Rust. As …\nLanewise saturating subtract.\nLanewise saturating subtract.\nReplaces each element with a number that represents its …\nReturns numbers representing the sign of each element.\nRestrict each element to a certain interval unless it is …\nReturns the maximum of each element.\nReturns the minimum of each element.\nReverses the byte order of each element.\nReverses the byte order of each element.\nRaw transmutation to an unsigned integer vector type with …\nConverts each element from radians to degrees.\nRounds toward zero and converts to the same-width integer …\nConverts each element from degrees to radians.\nReturns the number of trailing ones in the binary …\nReturns the number of trailing ones in the binary …\nReturns the number of trailing zeros in the binary …\nReturns the number of trailing zeros in the binary …\nWrapping negation.\nVector of const pointers with the same number of elements.\nVector of const pointers with the same number of elements.\nVector of constant pointers to the same type.\nVector of <code>isize</code> with the same number of elements.\nVector of <code>isize</code> with the same number of elements.\nMask type used for manipulating this SIMD vector type.\nMask type used for manipulating this SIMD vector type.\nVector of mutable pointers to the same type.\nOperations on SIMD vectors of constant pointers.\nOperations on SIMD vectors of mutable pointers.\nVector of <code>usize</code> with the same number of elements.\nVector of <code>usize</code> with the same number of elements.\nGets the “address” portion of the pointer.\nGets the “address” portion of the pointer.\nCasts to a pointer of another type.\nCasts to a pointer of another type.\nChanges constness without changing the type.\nChanges constness without changing the type.\nExposes the “provenance” part of the pointer for …\nExposes the “provenance” part of the pointer for …\nReturns <code>true</code> for each element that is null.\nReturns <code>true</code> for each element that is null.\nCreates a new pointer with the given address.\nCreates a new pointer with the given address.\nConvert an address back to a pointer, picking up a …\nConvert an address back to a pointer, picking up a …\nConvert an address to a pointer without giving it any …\nConvert an address to a pointer without giving it any …\nCalculates the offset from a pointer using wrapping …\nCalculates the offset from a pointer using wrapping …\nCalculates the offset from a pointer using wrapping …\nCalculates the offset from a pointer using wrapping …\nCalculates the offset from a pointer using wrapping …\nCalculates the offset from a pointer using wrapping …")