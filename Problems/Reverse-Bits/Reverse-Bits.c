uint32_t reverseBits(uint32_t n) {
    uint32_t r = 0;
    for (int b = 32 - 1; b >= 0; b--)
        r |= (n >> b & 1) << (32 - 1 - b);
    return r;
}
